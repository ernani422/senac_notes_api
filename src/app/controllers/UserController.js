import User from '../models/User';

module.exports = {
    async list(req, res) {
        const userlist = await User.findAll();

        return res.status(200).json(
            {
                timestamp: Date.now(),
                ok: true,
                data: userlist

            }
        )
    },
};