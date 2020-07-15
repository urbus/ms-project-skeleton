//*post login users service
exports.loginuser = async (data) => {
    try {
        //* add you sql or mongo db statements here.
    } catch(e) {
        throw new Error(e.message)
    }
}

//* session delete service
exports.deletesession = async (req) => { //*handles log out and session kill
    try {
        if(req) {
        req.session.destroy(function(){
            req.logOut();
        });
        } else {
            throw new Error("No session")
        }
    } catch(e) {
        throw new Error(e.message)
    }
}