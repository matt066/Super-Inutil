function abreSite() {
    
    var arraySite = [
					"https://giphy.com/gifs/nose-johnson-dwayne-y0yGfn4JsQCGY",
					"http://drivemeinsane.com",
					"http://www.shadyurl.com/",
					"https://coronavirus-ninja.com/",
					"http://baconsizzling.com/",
					"http://beesbeesbees.com/",
					"http://blue.eastsidelag.com",
					"http://brasilalemanhaeterno.com/",
					"http://burymewithmymoney.com/",
					"http://cachemonet.com/",
					"http://cat-bounce.com/",
					"http://chihuahuaspin.com",
					"http://colinsgiraffe.com/",
					"http://comicsans.de/",
					"http://corndog.io/",
					"http://csh.bz/gifmelter/melt.html",
					"http://dandandan.net/",
					"http://davedonut.deviantart.com/art/Banner-WEbsite-v03-412695674",
					"http://davidbowieisverydisappointedinyou.com/",
					"http://dogs.are.the.most.moe",
					"http://eelslap.com/",
					"http://emergencycompliment.com/",
					"http://endless.horse",
					"http://estipaper.com/",
					"http://existentialcrisis.net/",
					"http://geektyper.com/",
					"http://giantbatfarts.com/",
					"http://gifctrl.com/",
					"http://grandpanoclothes.com/",
					"http://hackertyper.com/",
					"http://hasthelargehadroncolliderdestroyedtheworldyet.com/",
					"http://haxiomic.github.io/GPU-Fluid-Experiments/html5/?q=Medium",
					"http://heeeeeeeey.com/",
					"http://heyyeyaaeyaaaeyaeyaa.com/",
					"http://iacopoapps.appspot.com/hopalongwebgl/",
					"http://iloveyoulikeafatladylovesapples.com/",
					"http://imgur-roulette.com/",
					"http://instantrimshot.com/classic/?sound=rimshot",
					"http://isnickelbacktheworstbandever.tumblr.com/",
					"http://jamesoff.net/fun/random-recipe-generator/",
					"http://leglesslegolegolas.com/",
					"http://makeacelebrityodd.com/",
					"http://make-everything-ok.com/",
					"http://myprogressbar.com/",
					"http://noot.space",
					"http://orteil.dashnet.org/cookieclicker/",
					"http://potato.io",
					"http://potatoaroundmyroom.netlify.com",
					"http://pudim.com.br/",
					"http://randomcolour.com/",
					"http://salmonofcapistrano.com/",
					"http://static.maniadescraps.com/imagens/cybergan38/animacoes/tetka.swf",
					"http://stripgenerator.com/",
					"http://theinternetfireplace.com/",
					"http://thesongthatdefinesyourlife.com",
					"http://thisissand.com/",
					"http://trololololololololololo.com/",
					"http://ventiladoronline.com/",
					"http://weavesilk.com/",
					"http://whatcolourisit.scn9a.org/",
					"http://worlds-highest-website.com/",
					"http://www.agegeek.com",
					"http://www.ascii-middle-finger.com",
					"http://www.astrohamster.com",
					"http://www.badgerbadgerbadger.com",
					"http://www.beesbeesbees.com",
					"http://www.birdsong.fm",
					"http://www.boringboringboring.com",
					"http://www.bouncingdvdlogo.com",
					"http://www.breadfish.nl",
					"http://www.buildshruggie.com",
					"http://www.burymewithmymoney.com",
					"http://www.cameronsworld.net",
					"http://www.cant-not-tweet-this.com",
					"http://www.catwig.com",
					"http://www.chickenonaraft.com",
					"http://www.clarifyscience.info/assets/day_of_dots_clock",
					"http://www.clicktoremove.com",
					"http://www.clicktoremove.com/",
					"http://www.corgiorgy.com",
					"http://www.corndogoncorndog.com",
					"http://www.crazycardtrick.com",
					"http://www.crouton.net",
					"http://www.dandandan.net",
					"http://www.davidbessler.com/pulldown/pipecleaner_dance3.swf",
					"http://www.d-e-f-i-n-i-t-e-l-y.com",
					"http://www.didthanoskill.me",
					"http://www.doesthedogdie.com",
					"http://www.donothingfor2minutes.com/",
					"http://www.doughnutkitten.com",
					"http://www.drumsound.net",
					"http://www.emergencycompliment.com",
					"http://www.emojitracker.com",
					"http://www.existentialcrisis.com",
					"http://www.fallingfalling.com",
					"http://www.ffffidget.com",
					"http://www.findtheinvisiblecow.com/",
					"http://www.flappy-2048.com",
					"http://www.flyingoperapigs.com",
					"http://www.foddy.net/Athletics.html",
					"http://www.freeonlineflashlight.com",
					"http://www.gurka.se",
					"http://www.hardcoreprawnlawn.com",
					"http://www.hectorsalamanca.com",
					"http://www.howmanypeopleareinspacerightnow.com/",
					"http://www.iamaturtle.org",
					"http://www.iamawesome.com",
					"http://www.ihatecilantro.com,",
					"http://www.instantostrich.com",
					"http://www.isitfridayyet.net",
					"http://www.ismycomputeron.com,",
					"http://www.isthat.mobi",
					"http://www.its-not-its.info",
					"http://www.jeff.com",
					"http://www.jellotime.com/",
					"http://www.justflipacoin.com",
					"http://www.koalastothemax.com",
					"http://www.lacquerlacquer.com",
					"http://www.lalalaa.com",
					"http://www.lalalalalalalalalalalalalalalalalala.com/",
					"http://www.leaf.com",
					"http://www.loopedforinfinity.com",
					"http://www.movenowthinklater.com/",
					"http://www.muchbetterthanthis.com/",
					"http://www.naofuncionou.com/",
					"http://www.neogeocity.com/",
					"http://www.niceonedad.com",
					"http://www.nooooooooooooooo.com/",
					"http://www.nullingthevoid.com/",
					"http://www.nyan.cat",
					"http://www.nyan.cat/",
					"http://www.omfgdogs.com/",
					"http://www.onemillionlols.com",
					"http://www.ooooiiii.com/",
					"http://www.openthiswindow.com",
					"http://www.partridgegetslucky.com",
					"http://www.patience-is-a-virtue.org",
					"http://www.pickledonkeyknife.com",
					"http://www.pictureofhotdog.com",
					"http://www.pieisgood.org",
					"http://www.pizzerialaferrera.com",
					"http://www.pleaselike.com",
					"http://www.plspetdoge.com",
					"http://www.pointerpointer.com/",
					"http://www.polarbearinasnowstorm.com",
					"http://www.procatinator.com",
					"http://www.raaa.com.br/",
					"http://www.rainymood.com/",
					"http://www.randomcolour.com",
					"http://www.randomgoat.com",
					"http://www.remoji.com",
					"http://www.republiquedesmangues.fr/",
					"http://www.riddlydiddly.com/",
					"http://www.ringingtelephone.com/",
					"http://www.rock-paper-scissors-game.com",
					"http://www.rrrgggbbb.com",
					"http://www.salmonofcapistrano.com",
					"http://www.sanger.dk/",
					"http://www.shtuff.com",
					"http://www.sketchywebsite.net",
					"http://www.skulltrumpet.com",
					"http://www.spaceis.cool",
					"http://www.staggeringbeauty.com/",
					"http://www.tacospin.com",
					"http://www.tencents.info",
					"http://www.thebestdinosaur.com",
					"http://www.thepointless.com/limerick-from-dimerick",
					"http://www.thispersondoesnotexist.com",
					"http://www.tinytuba.com",
					"http://www.unicodesnowmanforyou.com",
					"http://www.vatican.va/various/cappelle/sistina_vr/",
					"http://www.watchpaintdry.online",
					"http://www.whatyearisit.info",
					"http://www.windows93.net",
					"http://www.winkyface.org/",
					"http://www.worldsdumbestgame.com",
					"http://www.worldslongestwebsite.com",
					"http://www.wtfshouldidowithmylife.com",
					"http://www.wutdafuk.com",
					"http://www.wutdafuk.com/",
					"http://www.youfellasleepwatchingadvd.com",
					"http://www.yourmetricbirthday.com",
					"http://www.zombo.com/",
					"https://cant-not-tweet-this.com/",
					"https://hooooooooo.com/",
					"https://isitchristmas.com/",
					"https://smashthewalls.com/",
					"https://thatsthefinger.com/",
					"https://thisissand.com/",
					"https://www.calm.com/",
					"https://www.dafont.com/pt/",
					"https://www.incredibox.com/demo/",
					"https://www.incredibox.com/demo/",
					"https://www.rainymood.com/"
                    ];

    var randomSite = Math.floor(Math.random() * arraySite.length);
    window.open(arraySite[randomSite], '_blank');

    //var click = 0
    //click++;
    //document.getElementById('p1').innerHTML = click + " " + "Coisas in?teis j? exibidas";  
} 
