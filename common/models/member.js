module.exports = function(Member) {
  Member.afterRemote('login', function(ctx, userAffected, next){

    ctx.res.redirect('/?id=' + userAffected.userId + '&token=' + userAffected.id);
  });
};
