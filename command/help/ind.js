exports.limitcount = (prem, limitCounts) => {
	return`
*ใ LIMIT COUNT ใ*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Sorry ${pushname} Todays limit has run out\n limit is reset every 24:00 hours`
} 
exports.noregis = (pushname) =>{
	return` ๐โโ๏ธ Hello ${pushname} You havent registered yet. Type .daftar first`
	}
exports.regis = () =>{
	return`*_You are already registered in the Bot Database_*`
	}
exports.eror = () =>{
	return` [ โ ] Well Error, Try Again!`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *โญโโ ใ  ๐๐๐ซ๐ข๐๐ข๐๐๐ญ๐ข๐จ๐ง  ใ โ*
โโ Name : ${pushname}
โโ Number : ${sender.split("@")[0]}
โโ Time : ${time}
โโ Serial : ${serialUser}
โโ Total Users: ${totalUser.length}
โโโโโโโโโโโโโโโโ`
Thanks, For Registered, Now type .menu to view
bot feature.
`
	}
exports.owner = (botname) =>{
	return` ๐โโ๏ธ Command only owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`๐โโ๏ธ Command only admin ${groupName}`
	}
exports.adminB = () =>{
	return`[ โ ๏ธ ] Bot are not group admins`
	}
exports.err = () =>{
	return`[ โ ๏ธ ] This feature is in error!`
	}
exports.group = () =>{
	return`๐โโ๏ธ Command only in the group`
	}

exports.wait = () =>{
	return`โณ ๏ผฌ๏ผฏ๏ผก๏ผค๏ผฉ๏ผฎ๏ผง. . . . ~`
	}
exports.ok = () =>{
	return`แดแด แดแดษดแด  โ๏ธ~`
	}
exports.welcome = () =>{
	return`Hii
Don't forget to follow the rules`
      }
exports.leave = () =>{
	return`
โ
โฐโ แฌ _Back Again Required Donation Yes_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname},  ${salam}
	
โญโโง
โโขINFO BOTโข
โVersi : 0.02
โFeature : 237
โOwner : sแด๊ฑสษชษช็ง
โBot Name : xznbotz
โTotal Users: ${totalUser.length}
โhttps://tiktok.@_xzennz
โฐโโโโโโโโโโโโโโโโ โณน

โญโโฌฃ *List Menu*
โ โข ${prefix}menu
โ โข ${prefix}help
โ โข ${prefix}apri
โ
โ *Download*
โ โข ${prefix}play [query]
โ โข ${prefix}song [judul lagu]
โ โข ${prefix}pinterest [query]
โ โข ${prefix}ytmp3 [url]
โ โข ${prefix}ytmp4 [url]
โ โข ${prefix}ig [url]
โ โข ${prefix}igstalk
โ โข ${prefix}githubstalk
โ โข ${prefix}ytsearch [query]
โ โข ${prefix}mediafire [url]
โ โข ${prefix}tiktok [url]
โ โข ${prefix}tiktoknowm [url]
โ โข ${prefix}tiktokwm [url]
โ โข ${prefix}tiktokaudio [url]
โ โข ${prefix}soundcloud [url]
โ โข ${prefix}telesticker [url]
โ
โ *Wibu*
โ โข ${prefix}otaku
โ โข ${prefix}komiku
โ โข ${prefix}chara
โ โข ${prefix}naruto
โ โข ${prefix}kaneki
โ โข ${prefix}rimuru
โ โข ${prefix}akira
โ โข ${prefix}kurama
โ โข ${prefix}dazai
โ โข ${prefix}miku
โ โข ${prefix}mikasa
โ โข ${prefix}eren
โ โข ${prefix}titan
โ โข ${prefix}levi
โ โข ${prefix}sakura
โ โข ${prefix}hinata
โ โข ${prefix}neji
โ โข ${prefix}shinobu
โ โข ${prefix}kurumi
โ โข ${prefix}rem
โ โข ${prefix}minato
โ โข ${prefix}jiraya
โ โข ${prefix}tsunade
โ โข ${prefix}kiba
โ โข ${prefix}boruto
โ โข ${prefix}sarada
โ โข ${prefix}sasuke
โ โข ${prefix}madara
โ โข ${prefix}obito
โ โข ${prefix}tanjiro
โ โข ${prefix}nezuko
โ โข ${prefix}luffy
โ โข ${prefix}zoro
โ โข ${prefix}sanji
โ โข ${prefix}gon
โ โข ${prefix}killua
โ โข ${prefix}sagiri
โ โข ${prefix}zenitsu
โ โข ${prefix}natsu
โ โข ${prefix}genos
โ โข ${prefix}saitama
โ โข ${prefix}inosuke
โ โข ${prefix}inori
โ
โ *Sfw Dan Nsfw*
โ โข ${prefix}waifu
โ โข ${prefix}husbu
โ โข ${prefix}loli
โ โข ${prefix}milf
โ โข ${prefix}cosplay
โ โข ${prefix}wallml
โ โข ${prefix}futanari
โ โข ${prefix}nekoh
โ โข ${prefix}anal
โ โข ${prefix}hentai
โ โข ${prefix}ahegao
โ โข ${prefix}ass
โ โข ${prefix}blowjob
โ โข ${prefix}bdsm
โ โข ${prefix}cuckold
โ โข ${prefix}cum
โ โข ${prefix}ero
โ โข ${prefix}femdom
โ โข ${prefix}foot
โ โข ${prefix}gangbang
โ โข ${prefix}glasses
โ โข ${prefix}masturbation
โ โข ${prefix}orgy
โ โข ${prefix}panties
โ โข ${prefix}pussy
โ โข ${prefix}things
โ โข ${prefix}yuri
โ โข ${prefix}neko
โ
โ *Asupan*
โ โข ${prefix}asupan
โ โข ${prefix}ukty
โ โข ${prefix}ghea
โ โข ${prefix}rikagusriani
โ โข ${prefix}bocil
โ โข ${prefix}santuy
โ
โ *Convert*
โ โข ${prefix}stiker [video/image]
โ โข ${prefix}semoji ๐
โ โข ${prefix}attp
โ โข ${prefix}ttp
โ โข ${prefix}toimg
โ โข ${prefix}smeme [text]
โ โข ${prefix}memegen [text|text2]
โ โข ${prefix}toptt
โ โข ${prefix}tomp3
โ โข ${prefix}tomp4
โ โข ${prefix}fast [video/vn]
โ โข ${prefix}tupai [video/vn]
โ โข ${prefix}vibra [video/vn]
โ โข ${prefix}tourl [image/video]
โ โข ${prefix}robot [video/vn]
โ โข ${prefix}slow [video/vn]
โ โข ${prefix}bass [video/vn]
โ โข ${prefix}nightcore [video/vn]
โ
โ *Education*
โ โข ${prefix}nuliskiri [text]
โ โข ${prefix}nuliskanan [text]
โ โข ${prefix}brainly [soal]
โ โข ${prefix}foliokiri [text]
โ โข ${prefix}foliokanan [text]
โ โข ${prefix}pantun
โ 
โ *Walpaper*
โ โข ${prefix}walpaper
โ โข ${prefix}teknologi
โ โข ${prefix}programmer
โ โข ${prefix}gamer
โ โข ${prefix}anime
โ โข ${prefix}muslim
โ โข ${prefix}cyber
โ
โ *Other*
โ โข ${prefix}ssweb
โ โข ${prefix}cekapikey [lolhuman]
โ โข ${prefix}delete
โ โข ${prefix}meme
โ โข ${prefix}readmore
โ โข ${prefix}infogempa
โ โข ${prefix}upswvideo
โ โข ${prefix}upswteks
โ โข ${prefix}upswimage
โ โข ${prefix}quotesanime
โ โข ${prefix}searchgc [link]
โ โข ${prefix}playstore [apk name]
โ
โ *Islam*
โ โข ${prefix}kisahnabi
โ โข ${prefix}surah
โ
โ *Sound*
โ โข ${prefix}sound
โ โข ${prefix}sound1
โ โข ${prefix}sound2
โ โข ${prefix}sound3
โ โข ${prefix}sound4
โ โข ${prefix}sound5
โ โข ${prefix}sound6
โ โข ${prefix}sound7
โ โข ${prefix}sound8
โ โข ${prefix}sound9
โ โข ${prefix}sound10
โ โข ${prefix}sound11
โ โข ${prefix}sound12
โ
โ *Game*
โ โข ${prefix}tebakgambar 
โ โข ${prefix}suit
โ โข ${prefix}family100
โ โข ${prefix}caklontong
โ โข ${prefix}truth
โ โข ${prefix}dare
โ โข ${prefix}gaycek
โ โข ${prefix}sangecek
โ โข ${prefix}lesbicek
โ โข ${prefix}gantengcek
โ โข ${prefix}cantikcek
โ โข ${prefix}cantik
โ โข ${prefix}ganteng
โ โข ${prefix}jelek
โ โข ${prefix}goblok
โ โข ${prefix}bego
โ โข ${prefix}pinter
โ โข ${prefix}jago
โ โข ${prefix}nolep
โ โข ${prefix}monyet
โ โข ${prefix}babi
โ โข ${prefix}beban
โ โข ${prefix}baik
โ โข ${prefix}jahat
โ โข ${prefix}anjing
โ โข ${prefix}haram
โ โข ${prefix}kontol
โ โข ${prefix}pakboy
โ โข ${prefix}wibu
โ โข ${prefix}hebat
โ โข ${prefix}sadboy
โ โข ${prefix}sadgirl
โ โข ${prefix}apakah
โ โข ${prefix}kapankah
โ โข ${prefix}pakgirl
โ โข ${prefix}jadian
โ
โ *Photooxy*
โ โข ${prefix}narutobanner
โ โข ${prefix}shadow
โ โข ${prefix}romantic
โ โข ${prefix}smoke
โ โข ${prefix}burnpaper
โ โข ${prefix}lovemsg
โ โข ${prefix}grass
โ โข ${prefix}doubleheart
โ โข ${prefix}coffecup
โ โข ${prefix}lovetext
โ โข ${prefix}butterfly
โ
โ *Info*
โ โข ${prefix}owner
โ โข ${prefix}donasi
โ โข ${prefix}rules
โ โข ${prefix}daftar
โ โข ${prefix}creator
โ
โ *Owner*
โ โข ${prefix}bc [text]
โ โข ${prefix}bc2 [text]
โ โข ${prefix}leave
โ โข ${prefix}get [link]
โ โข ${prefix}shutdown
โ โข ${prefix}restart
โ โข ${prefix}buggc
โ โข ${prefix}creategrup @tag
โ โข ${prefix}listgroup
โ โข ${prefix}block
โ โข ${prefix}unblock
โ โข ${prefix}setppbot
โ โข >
โ โข $
โ โข  => 
โ
โ *Group*
โ โข ${prefix}antilink 1 / 0
โ โข ${prefix}antivirtex 1 / 0
โ โข ${prefix}hidetag [text]
โ โข ${prefix}linkgrup
โ โข ${prefix}grup open/close
โ โข ${prefix}add 628
โ โข ${prefix}tagall
โ โข ${prefix}kick @tag
โ โข ${prefix}setdesc [text] 
โ โข ${prefix}setname [text] 
โฐโโฌฃ
โญโโง ๐๏ธBIG THANKS TO๐๏ธโง
โโ Allah Swt
โโ Ortu
โโ Akmal Nz (Newbie)
โโ Arya Putra (Friend)
โโ sแด๊ฑสษชษช็ง (Partner)
โโ ๐๐ฬฌ๐๐ถแทผ๐ณ๐ฒฬ๐ฟ ๐ฬธ๐ผฬด๐ (Partner)
โโ ษชอฅแดอญsแทคอขแดอซแดอคแดษขษขสึง (Partner)
โโ Zeeone Ofc (Big Mastah)
โโ Ramdhani Ofc (Mastah)
โโ Lexxy Ofc (Big Mastah)
โโ Aldi Fauzi (Mastah)
โโ Veenz (Newbie)
โโ Siegrin (Mastah)
โโ Dinata (Mastah)
โโ RIMURUBOTZ (Mastah)
โโ SANZY YT (Mastah)
โโ ADIWAJSHING (Penyedia Baileys)
โโ Penyedia Module
โโ Heroku
โโ Whatsapp
โฐโโโโโโโโโโโโโโโโ โณน
`
	}