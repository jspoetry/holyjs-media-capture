---
layout: statement
---

# Хочу поменять констрейны, а медиастрим уже захвачен

---

# Меняем констрейны на лету

[MediaStreamTrack.applyConstraints](https://www.w3.org/TR/mediacapture-streams/#dom-mediastreamtrack-applyconstraints)

````md magic-move
<<< @/snippets/applyConstraints.ts#basic {*|1|2|3-10|*}{lines: true}

<<< @/snippets/applyConstraints.ts#safe {*}{lines: true}

<<< @/snippets/applyConstraints.ts#safe-with-getter {*|5}{lines: true}

<<< @/snippets/applyConstraints.ts#deviceId {*}{lines: true}
````


---
layout: statement
---

# А какие констрейны указывать?

---

# Подсматриваем констрейны у других

[chrome://webrtc-internals](chrome://webrtc-internals)

<Image src="/chrome-webrtc-internals.png"  />
