class PCOrderRepository {
    constructor(PCOrderModel, UserModel, PCModel) {
        this.pcOrderModel = PCOrderModel
        this.userModel = UserModel
        this.pcModel = PCModel
    }

    postPCOrder = async (userId, pcId, startDateTime, endDateTime, deductedPoints) => {
        try {
            await this.pcOrderModel.create({
                userId: userId,
                pcId: pcId,
                startDateTime: startDateTime,
                endDateTime: endDateTime,
                deductedPoints: deductedPoints
            })

            let oldPoints = await this.userModel.findOne({where: {userId: userId}, attributes:['points'], raw: true})
            console.log(oldPoints)
            
            oldPoints = oldPoints.points

            const newPoints = oldPoints-deductedPoints

            await this.userModel.update({points: newPoints},{where: {userId: userId}})

            await this.pcModel.update({pcStatus: true}, {where: {pcId: pcId}})

            return
        } catch (error) {
            error.status = 400
            throw(error)
        }
    }
}

module.exports = PCOrderRepository;