const UserService = require('../services/user.service.js')

class UserController {
    userService = new UserService()

    // 이름과 핸드폰 번호로 아이디 찾기
    findByNameAndPhone = async (req, res) => {
        try {
            const {name, phone} = req.params

            const id = await this.userService.findByNameAndPhone(name,phone)

            if (id === undefined) {
                const error = new Error('해당 이름과 핸드폰으로 등록된 계정이 없습니다.')
                error.status = 404
                throw(error)
            }

            res.status(200).json(id)
        } catch (error) {
            return res.status(error.status).json({message: error.message})
        }
    }

    // ID, 이름, 휴대폰 번호로 비밀번호 재설정
    putPasswordByIdNamePhone = async (req,res) => {
        try {
            const {id, name, phone, password, confirmPassword} = req.body
            
            if (password !== confirmPassword) {
                const error = new Error('새 비밀번호가 비밀번호 확인 값과 일치하지 않습니다.')
                error.status = 412
                throw(error)
            }

            const userIdUpdatedPassword = await this.userService.putPasswordByIdNamePhone(id,name,phone,password)

            res.status(201).json({message: '비밀번호가 성공적으로 변경되었습니다.'})
        } catch (error) {
            return res.status(error.status).json({message: error.message})
        }
    }

    //id로 나의 포인트 조회
    getMyPoint = async (req,res) => {
        try{
            const myPoint = await this.userService.getMyPoint(userId)

            res.status(201).json({message:{myPoint}})
        } catch(error){
            return res.status(error.status).json({message: error.message})
        }
       
    }
}

module.exports = UserController;