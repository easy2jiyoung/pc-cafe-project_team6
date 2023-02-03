const UserService = require('../services/user.service.js')
const jwt = require('jsonwebtoken');

class UserController {
    userService = new UserService();


    // 로그인
    login = async (req, res) => {
        const { id, password } = req.body;
        
        try {
            const userInfo = await this.userService.findOneUser(id, password);

            const token = jwt.sign({ userId: userInfo.userId }, "teamSparta6", {expiresIn: '1d'});

            res.cookie('accessToken',token);

            res.status(200).send('PC방에 오신 것을 환영합니다.');
        } catch (error) {
            console.error(error);
            res.status(error.status).send({message:error.message});
        }
    }

    // 로그아웃
    logout = async (req,res) => {
        try {
            res.clearCookie('accessToken')
            return res.status(200).send({message: '로그아웃 되었습니다.'})
        } catch (error) {
            return res.status(400).send(error)
        }
    }


    //id로 나의 정보 수정
    updateUser = async (req,res) => {
        try {
            const {userId} = req.params
            const {id, phone, email, password,confirmPassword}=req.body
    
            if (password !== confirmPassword) {
                const error = new Error('새 비밀번호가 비밀번호 확인 값과 일치하지 않습니다.')
                error.status = 412
                throw(error)
            }
    
            const updateMyinfo = await this.userService.updateUser(userId, id, phone, email, password)
            res.status(200).json({message: "내 정보를 업데이트 완료 했습니다."})
        } catch (error) {
            return res.status(error.status).json({message: error.message})
        }
} 

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
            const {userId} = req.params
            const myPoint = await this.userService.getMyPoint(userId)

            res.status(200).json(myPoint)
        } catch(error){
            console.log(error)
            return res.status(error.status).json({message: error.message})
        }
    }

    

}

module.exports = UserController;