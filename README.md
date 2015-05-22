# WHOSIN ?

The project is powered by [LoopBack](http://loopback.io).


# Routes

/api/members/:id:?access_token=:token: get the member
/api/members/:id:/moments?access_token=:token: get the member's moments


# Rules

For now, only the owner can CRUD his moment. You have to be authentificated to CRUD your member's info, and CRUD an event.
