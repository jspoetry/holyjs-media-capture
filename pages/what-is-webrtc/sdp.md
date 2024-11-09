# SDP {.title v-click.hide}

# Session Description Protocol {.title v-after}

<div v-click="2"> 

<<< @/snippets/sdp.txt {*|7|25-28|22|19|10-13}{maxHeight: '400px', lines: true, at: '3'}

</div>

<style>
  .title.slidev-vclick-hidden {
    display: none;
  }
</style>

<!-- 
SDP расшифровывается это как Session Description Protocol
Несмотря на слово "протокол", это больше формат описания данных, как и JSON.
[click:3] SDP содержит информацию о медиа, которое будет в звонке: аудио, видео
[click:4] Информацию о кодеках 
[click:5] Будем ли мы отправлять и получать медиа, или и то, и то
[click:6] Также SDP может содержать сетевую информацию
[click:7] И многое другое 
 -->