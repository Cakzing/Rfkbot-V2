let handler = function (m) {
	this.sendContact(m.chat, '6287729323961', 'Owner KryBot :)', m)
}

handler.customPrefix = ['Owner KryBot'] 
handler.command = new RegExp

module.exports = handler
