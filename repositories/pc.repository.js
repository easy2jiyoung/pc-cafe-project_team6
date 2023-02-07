const Sequelize = require('sequelize')
const { development } = require('../config/config.json')
const { Op } = require('sequelize');
const sequelize = new Sequelize(development.database, development.username, development.password, { host: development.host, dialect: development.dialect })
class PCRepository {
    constructor(PCModel, PCOrderModel) {
        this.pcModel = PCModel
        this.pcOrderModel = PCOrderModel
    }

    // PC 목록 조회
    getPCList = async () => {
        try {
            const pcList = await this.pcModel.findAll({
                attributes: ['pcId', 'pcStatus']
            })

            return pcList
        } catch (error) {
            error.status = 400
            throw error
        }
    }

    // PC status 업데이트
    updatePcStatus = async () => {
        try {
            const [results, metadata] = await sequelize.query('update pcCafe_development.pcs p left join (select pcId, endDateTime from (select pcId, endDateTime,\
                rank() over(partition by pcId order by endDateTime desc) endDateTimeRank\
                from pcCafe_development.pcorders p) as a\
                where endDateTimeRank = 1) p2\
                on p.pcId = p2.pcId\
            set pcStatus = 0\
            where endDateTime < CURRENT_TIMESTAMP and pcStatus = 1')

            console.log(results)
            console.log(metadata)

            return
        } catch (error) {
            console.log(error)
            error.status = 400
            throw error
        }
    }

    logoutPCstatus = async (pcId, pcStatus) => {
        try {
            
            await this.pcModel.update({ pcStatus: pcStatus }, {where: {pcId: pcId}})
            
            let date = new Date
            await this.pcOrderModel.update({ endDateTime: date}, 
                {where: {pcId: pcId, endDateTime: {[Op.gte]: date}}})
            return
        } catch (error) {
            error.status = 400;
            throw error;
        }
    }
}

module.exports = PCRepository;