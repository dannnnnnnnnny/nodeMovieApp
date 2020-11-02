const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite");

//=================================
//             Favorite
//=================================

router.post('/favoriteNumber', (req, res) => {

    // mongoDB에서 favorite 숫자 가져오기
    Favorite.find({ "movieId": req.body.movieId })
    .exec((err, info) => {
        if (err) return res.status(400).send(err)

        // 프론트로 숫자 정보 보내주기
        return res.status(200).json({ success: true, favoriteNumber: info.length })
    })
    
})



router.post('/favorited', (req, res) => {

    // 내가 이 영화를 Favorite 리스트에 넣었는지 정보를 DB에서 가져오기

    Favorite.find({ "movieId": req.body.movieId, "userFrom": req.body.userFrom })
    .exec((err, info) => {
        if (err) return res.status(400).send(err)
        let result = false;
        if (info.length !== 0) {
            result = true
        }

        return res.status(200).json({ success: true, favorited: result })
    })
 
})


router.post('/addTofavorite', (req, res) => {

    // 데이터 추가 및 저장
    console.log("추가 : ", req.body);
    const favorite = new Favorite(req.body);

    favorite.save((err, doc) => {
        if(err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
 
})


router.post('/removeFromfavorite', (req, res) => {

    // 데이터 삭제
    Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if(err) return res.status(400).send(err)
            return res.status(200).json({ success: true, doc })
        })
})


router.post('/getFavoriteMovie', (req, res) => {

    Favorite.find({'userFrom' : req.body.userFrom})
        .exec((err, favorites) => {
            if(err) return res.status(400).send(err);
            return res.status(200).json({success:true, favorites})
        })
})

module.exports = router;
