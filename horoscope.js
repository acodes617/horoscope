document.querySelector('#check').addEventListener('click', check)

function check() {

    const month = document.querySelector('#month').value.toLowerCase ()

    const day = document.querySelector('#day').value

    
        if (month == 'december' && day >= 22 && day <= 31 || month =='january' && day >=1 && day <= 19)
        {
            document.querySelector('#zodiac').innerText='Capricorn'
            document.querySelector('#reading').innerText='Today you and the other members of your household might discuss the possibility of making some changes, Capricorn. This could involve some redecorating or remodeling or even something as mundane as a thorough cleaning. However, it could also involve the possibility of moving to a completely different place. The need for change in your surroundings is apparent, so don\'t hesitate. Go ahead and initiate the first steps!'
            document.body.style.backgroundColor="black"
            document.body.style.backgroundImage="url('images/capricorn.gif')"
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundSize='cover'
            
        }
        else if (month == 'january' && day >= 20 && day <= 31 || month == 'february' && day >=1 && day <= 18)
        {
            document.querySelector('#zodiac').innerText='Aquarius'
            document.querySelector('#reading').innerText='Today you might feel the urge to write, Aquarius. This could involve nothing more than a lengthy letter or email to a friend, but it could also be creative work, such as a novel, essay, screenplay, or poem. Whatever it is, you\'re likely to express some intellectual, philosophical, or spiritual concerns that you hope to shed some light on. Don\'t be surprised if you come up with more questions than answers.'
            document.body.style.backgroundImage="url('images/aquarius.gif')"
            document.body.style.backgroundColor="black"
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundSize='cover'
        }
        else if (month == 'february' && day >= 19 && day <=29|| month == 'march' && day >=1 && day <= 20)
        {
            document.querySelector('#zodiac').innerText='Pisces'
            document.querySelector('#reading').innerText=' Paperwork involving money needs to be executed today, Pisces. It could be a settlement, new commission, or bonus of some kind. This is likely to be a joyous occasion because money is coming your way, even though the paperwork itself might be a drag. Try to concentrate and get it done quickly so you and those close to you can go out and celebrate. Make a reservation at your favorite restaurant.'
            document.body.style.backgroundImage="url('images/pisces.gif')"
            document.body.style.backgroundColor="black"
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundSize='cover'
        }
        else if (month == 'march' && day >=21 && day <=31 || month == 'april' && day >=1 && day <= 19)
        {
            document.querySelector('#zodiac').innerText='Aries'
            document.querySelector('#reading').innerText='Today your mind should be especially quick and penetrating, Aries. You could decide to tackle some in-depth research that you\'ve been considering doing for a while on a subject that fascinates you. You might also want to discuss the subject with someone close to you who shares this interest. Don\'t be surprised if you come up with some intriguing insights. Write everything down. You may want to make use of it later.'
            document.body.style.backgroundImage="url('images/aries.gif')"
            document.body.style.backgroundColor="black"
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundSize='cover'
        }
        else if (month == 'april' && day >=20 && day <=30 || month == 'may' && day >=1 && day <= 20)
        {
            document.querySelector('#zodiac').innerText='Taurus'
            document.querySelector('#reading').innerText='Some vivid, beautiful dreams or visions could awaken you and make you aware of new opportunities. They could be creative in nature, and you should consider taking advantage of them, Taurus. This revelation could have been there, unnoticed, for a long time. Don\'t write it off because of the unorthodox way it appeared. Look into it and see where it leads you. Your destiny might lie just around the corner!'
            document.body.style.backgroundImage="url('images/taurus.gif')"
            document.body.style.backgroundColor="black"
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundSize='cover'
        }
        else if (month == 'may' && day >=21 && day <=31 || month == 'june' && day >=1 && day <= 20)
        {
            document.querySelector('#zodiac').innerText='Gemini'
            document.querySelector('#reading').innerText='Today you might decide to attend a group activity that is primarily concerned with an intellectual, philosophical, or spiritual interest of yours, Gemini. You might meet a charismatic person whose conversation stimulates your mind and causes you to come up with new insights. During the course of the day, you might notice that this person is very appealing to you, and you could imagine getting romantically involved at some point.'
            document.body.style.backgroundImage="url('images/gemini.gif')"
            document.body.style.backgroundColor="black"
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundSize='cover'
        }
        else if (month == 'june' && day >=21 && day <=30 || month == 'july' && day >=1 && day <= 22)
        {
            document.querySelector('#zodiac').innerText='Cancer'
            document.querySelector('#reading').innerText='A public figure, perhaps an author, might capture your interest in some way today, Cancer. This person could have a lot to say that appeals to you on a number of different levels. You\'ll want to acquaint yourself with as much of this person\'s work as possible. You could experience some valuable personal insights. Don\'t worry if your practical mind chides you for this obsession. Sometimes it\'s a good thing!'
            document.body.style.backgroundImage="url('images/cancer.gif')"
            document.body.style.backgroundColor="black"
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundSize='cover'
        }
        else if (month == 'july' && day >= 23  && day <=31 || month == 'august' && day >=1 && day <= 22)
        {
            document.querySelector('#zodiac').innerText='Leo'
            document.querySelector('#reading').innerText='Today you might attend a party or group activity that puts you in touch with some interesting people from faraway places, Leo. You could find their conversation intellectually stimulating. You\'re apt to learn a lot from them. Books could be involved in some way. You\'ll want to stay in touch with them, so be sure to get names, phone numbers or email addresses. This could open up some new doors for you.'
            document.body.style.backgroundImage="url('images/leo.gif')"
            document.body.style.backgroundColor="black"
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundSize='cover'
        }
        else if (month == 'august' && day >= 23 && day <= 31 || month == 'september' && day >=1 && day <= 22)
        {
            document.querySelector('#zodiac').innerText='Virgo'
            document.querySelector('#reading').innerText='Some big upheaval in your career could take you by surprise, Virgo, but it\'s apt to make a very positive difference to you. Your public standing and income could both skyrocket. Legal papers might be involved in some way. This could happen so suddenly that it has you in a daze, but try to remain focused and go with the flow. You won\'t want this opportunity to pass you by.'
            document.body.style.backgroundImage="url('images/virgo.gif')"
            document.body.style.backgroundColor="black"
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundSize='cover'
        }
        else if (month == 'september' && day >= 23 & day <=30 || month == 'october' && day >=1 && day <= 22)
        {
            document.querySelector('#zodiac').innerText='Libra'
            document.querySelector('#reading').innerText=' A social event could bring you into contact with a very intense, fascinating person in an intriguing profession, Libra. You could find him or her very charming and sexy. If you aren\'t romantically involved at the moment, there could be potential here! If nothing else, this person might steer you in a new intellectual or spiritual direction. You could seem somewhat transformed when you leave the party tonight.'
            document.body.style.backgroundImage="url('images/libra.gif')"
            document.body.style.backgroundColor="black"
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundSize='cover'
        }
        else if (month == 'october' && day >=23 & day <=31|| month == 'november' && day >=1 && day <= 21)
        {
            document.querySelector('#zodiac').innerText='Scorpio'
            document.querySelector('#reading').innerText='You always tend to have good powers of concentration, Scorpio, but today you\'re more focused than usual, probably on a project that means a lot to you. This could be job related, it might involve helping a friend, or it may just be a personal project. Whatever it is, you should accomplish a lot today. The downside is that you might forget to eat, sleep, or take any breaks. Take care!'
            document.body.style.backgroundImage="url('images/scorpio.gif')"
            document.body.style.backgroundColor="black"
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundSize='cover'
        }
       else if (month == 'november' && day >= 22 && day <= 30|| month == 'december' && day >= 1 && day <= 21)
        {
            document.querySelector('#zodiac').innerText='Sagittarius'
            document.querySelector('#reading').innerText='An intense conversation with your romantic partner could take place today, Sagittarius. This could involve taking the relationship to the next commitment level, and the subject of marriage could come up. If you\'re already married, this could mean taking on a new responsibility, such as a house or child. If you aren\'t currently involved, expect to meet someone new and exciting who appeals to you on a number of levels.'
            document.body.style.backgroundImage="url('images/sagittarius.gif')"
            document.body.style.backgroundColor="black"
            document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundSize='cover'
        }
        else {document.querySelector('#zodiac').innerText="You sure you have a horoscope?!"}
 
 }
