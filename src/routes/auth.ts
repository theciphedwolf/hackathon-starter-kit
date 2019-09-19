import express from 'express';
const router = express.Router();
import passport from 'passport';
//import '../handlers/passport'

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
passport.authenticate('google', {
    failureRedirect: '/login',
    failureFlash: 'Incorrect Email Address or Password!',
    successRedirect: '/',
    successFlash: 'You are now logged in!',
  })

 );


router.get('/github', passport.authenticate('github'));

router.get('/github/callback',
passport.authenticate('github', {
    failureRedirect: '/login',
    failureFlash: 'Incorrect Email Address or Password!',
    successRedirect: '/',
    successFlash: 'You are now logged in!',
  })

 );

 router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback',
passport.authenticate('twitter', {
    failureRedirect: '/login',
    failureFlash: 'Incorrect Email Address or Password!',
    successRedirect: '/',
    successFlash: 'You are now logged in!',
  })

 );

 router.get('/facebook', passport.authenticate('facebook'));

 router.get('/facebook/callback',
 passport.authenticate('facebook', {
     failureRedirect: '/login',
     failureFlash: 'Incorrect Email Address or Password!',
     successRedirect: '/',
     successFlash: 'You are now logged in!',
   })
 
  );


  router.get('/linkedin', passport.authenticate('linkedin'));

  router.get('/linkedin/callback',
  passport.authenticate('linkedin', {
      failureRedirect: '/login',
      failureFlash: 'Incorrect Email Address or Password!',
      successRedirect: '/',
      successFlash: 'You are now logged in!',
    })
  
   );

   router.get('/dropbox', passport.authenticate('dropbox-oauth2'));

   router.get('/dropbox/callback',
   passport.authenticate('dropbox-oauth2', {
       failureRedirect: '/login',
       failureFlash: 'Incorrect Email Address or Password!',
       successRedirect: '/',
       successFlash: 'You are now logged in!',
     })
   
    );


export default router;