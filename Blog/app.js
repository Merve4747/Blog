const siirBtn=document.querySelector('#siir'),
sozBtn=document.querySelector('#soz'),
hakkimdaBtn=document.querySelector('#hakkimda')
muzikBtn=document.querySelector('#muzik')
iletisimBtn=document.querySelector('#iletisim')
hakkimdaBtn.addEventListener('click',function(e){
    e.preventDefault();
   ShowContent('Hakkımda',
   `
 <p class="paragraph"><pre><img src="resim/merve.jpg"><br>
<h4>BEN KİMİM?</h4>
Ben Merve OT Bilgisayar Mühendisliği 4.sınıf öğrencisiyim.Kendime bir 
şeyler katmak çok zevkli ve eğlenceli.İşini severek yapan ve detayları 
çok önemseyen biriyim.İnsan ilişkileri noktasında esnek olmanın bana
verimlilik ,olarak geri döndüğünü sıklıkla tecrübe ettim.Yeni şeyler 
öğrenmeyi,yeteneklerimi geliştirmeyi çok önemsiyorum.<br>
                                                                             <b>MERVE OT</b> 🦋
</pre></p>
   `)
})

siirBtn.addEventListener('click',function(e){
    e.preventDefault();
   ShowContent('Şiir',
   `
   <p class="paragraph"><pre>
          ✿<b>ANLATAMIYORUM</b>✿

   Ağlasam sesimi duyar mısınız,
   Mısralarımda;
   Dokunabilir misiniz,
   Gözyaşlarıma, ellerinizle?
                                                  
   Bilmezdim şarkıların bu kadar güzel,
   Kelimelerinse kifayetsiz olduğunu
   Bu derde düşmeden önce
   
   Bir yer var; biliyorum;
   Her şeyi söylemek mümkün;
   Epeyce yaklaşmışım, duyuyorum;
   Anlatamıyorum.🤍<br>
                              <b> ORHAN VELİ KANIK</b>      
   
   </pre></p>
   `)
})
sozBtn.addEventListener('click',function(e){
    e.preventDefault();
   ShowContent('Günün Sözü',
   `
   <p class="paragraph c">
<pre><br>
✿   ✿    ✿    ✿    ✿    ✿    ✿   ✿    ✿    ✿   ✿   ✿   ✿   ✿    ✿    ✿   ✿  
<br>
Hayat ne kadar tuhaf öyle değil mi? Acını kamufle etmek için biraz                
gülümsüyorsun ve herkes senin dünyanın en mutlu insanı olduğunu 
düşünmeye başlıyor.Oysa ki kendi kabuğunla bütünleşmiş vaziyettesin.
Acını saklarsın,belli etmezsin en acısı da canın yanar ama kimseye
söyleyemezsin.Kendi kabuğunda kendi acılarınla baş başa kalırsın.
Hayatın sana sunduğu...Bundan daha tuhaf ne olabilir ki? <br>   

✿   ✿    ✿    ✿    ✿    ✿    ✿   ✿    ✿    ✿   ✿   ✿   ✿   ✿    ✿    ✿   ✿      
   



</pre>
</p>
   `)
})
muzikBtn.addEventListener('click',function(e){
    e.preventDefault();
   ShowContent('Müzik',
   `
   <p class="paragraph" class="muzik"><audio controls loop>
   <source src="fon/fon.mp3" type="audio/mpeg">
</audio>
<audio controls loop >
   <source src="fon/fon1.mp3" type="audio/mpeg"><br>
</audio>
<audio controls loop >
   <source src="fon/fon3.mp3" type="audio/mpeg"><br>
</audio>
<audio controls loop >
   <source src="fon/fon4.mp3" type="audio/mpeg">
</audio>
<audio controls loop >
   <source src="fon/fon5.mp3" type="audio/mpeg"><br>
</audio>
</p>
   `)
})

iletisimBtn.addEventListener('click',function(e){
    e.preventDefault();
   ShowContent('İletişim',
   `
   <p class="paragraph">
<pre>
<form id="form1" method="post" class="contact_us" action="mailto:surweyplay@gmail.com" enctype="text/plain">
<input type="text" name="" placeholder="Adınız :">  
<input type="mail" name="" placeholder="E-Mail :">
<input type="text" name="" placeholder="Mesajınız :">
<input class="btn" type="submit" value="GÖNDER">
</form>
</pre>
<div class="logo">
      <a href="https://www.instagram.com/merveot.47/"><img title="İnstagram" src="resim/inst.png" width="30"></a>
      <a href="https://twitter.com/merve4752"><img title="Twitter" src="resim/twit.png" width="30"></a>
      <a href="https://www.linkedin.com/in/Merve OT/"><img title="Linkedin" src="resim/link.png" width="30"></a>
    </div>

   </p>
   `)
})



function ShowContent(title, content) {
    const oldDiv = document.querySelector('.pop');
    if (oldDiv) oldDiv.remove();
            const popup = 
            `
            <div class="pop-header">
                ${title}
                <i id="closeBtn" class="fa-regular fa-rectangle-xmark"></i>
            </div>
            <div class="pop-content">
                ${content}
            </div>
            `
            const div = document.createElement('div')
            div.innerHTML = popup;
            div.className = 'pop';
            document.body.appendChild(div);
        const closeBtn = document.querySelector('#closeBtn');
        const pop = document.querySelector('.pop');
        closeBtn.addEventListener('click', function(){
            pop.remove();
        })
    }
