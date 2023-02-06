class PCRepository {
    constructor(PCModel) {
        this.pcModel = PCModel
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
}

module.exports = PCRepository;