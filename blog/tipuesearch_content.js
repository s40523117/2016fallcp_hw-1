var tipuesearch = {"pages":[{"tags":"misc","url":"./pages/about/","title":"About","text":"2016Fall 修課成員網誌"},{"tags":"Misc","url":"./cp-w14lian-xi.html","title":"CP W14練習","text":"window.onload=function(){ brython(1); } from browser import document from browser import alert def get_input(ev): the_input= input(\"我上課不要玩手機\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) 40523139"},{"tags":"Misc","url":"./cp-w15lian-xi.html","title":"CP W15練習","text":"window.onload=function(){ brython(1); } from browser import document as do from browser import html c = do[\"con\"] def compa(e): your_input = input(\"請輸入一個整數!\") # 如何判斷所輸入的整數比 10 大 try: if int(your_input) > 10: c <= \"所輸入的整數:\" + your_input + \"比 10 大\" + html.BR() else: c <= \"所輸入的整數:\" + your_input + \"比 10 小\" + html.BR() except: c <= \"請輸入整數!!\" + html.BR() #print(\"test\") ''' for i in range(5): c <= \"test\" + html.BR() ''' do[\"b1\"].bind(\"click\", compa) compa from browser import document as do from browser import html c = do[\"con\"] def compa(e): your_input = input(\"請輸入一個整數!\") # 如何判斷所輸入的整數比 10 大 try: if int(your_input) > 10: c <= \"所輸入的整數:\" + your_input + \"比 10 大\" + html.BR() else: c <= \"所輸入的整數:\" + your_input + \"比 10 小\" + html.BR() except: c <= \"請輸入整數!!\" + html.BR() #print(\"test\") ''' for i in range(5): c <= \"test\" + html.BR() ''' do[\"b1\"].bind(\"click\", compa) compa"},{"tags":"Misc","url":"./cp-w13lian-xi.html","title":"CP W13練習","text":"將 http://mde.tw/2016fallcp/course/Python3Programs.txt 整理成brython window.onload=function(){ brython(1); } from browser import document as doc from browser import html container = doc['container'] mystring = \"\" num = input(\"請輸入重複執行次數\") #for i in range(1 , 11): for i in range(1, int(num)+1): mystring += str(i) + \": hello mde\" + html.BR() container <= mystring from browser import document as doc from browser import html container = doc['container'] mystring = \"\" num = input(\"請輸入重複執行次數\") #for i in range(1 , 11): for i in range(1, int(num)+1): mystring += str(i) + \": hello mde\" + html.BR() container <= mystring from browser import document as doc from browser import html container = doc['temperature'] mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏\" + str(cdegree) + \"度=華式\" + str(fdegree) + \"度\" container <= output_string from browser import document as doc from browser import html container = doc['temperature'] mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏\" + str(cdegree) + \"度=華式\" + str(fdegree) + \"度\" container <= output_string 開始進行範例分類: 接受使用者的輸入 利用alert() 顯示結束 直接列印結果"},{"tags":"Course","url":"./w12-brython-hui-tu-lian-xi.html","title":"W12 Brython 繪圖練習","text":"window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() def canvasText(x, y, fontSize, string, sup, sub, color, ctx): # 標定各弦音符號, 以及把位編號 ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sup, x+fontSize/1.6, y) ctx.fill() ctx.stroke() ctx.closePath() w = 20 h = 30 background(100, 100, w, h, 5, 5, ctx) mylist = [\"E\", \"A\", \"D\", \"G\", \"B\", \"E\"] num = 0 for s in mylist: #canvasText(100, 80, 20, \"A\", \"B\", \"\", \"black\", ctx) canvasText(100+num*w, 80, 20, s, \"\", \"\", \"black\", ctx) num = num + 1"},{"tags":"Course","url":"./w10-brython-hui-tu-fan-li.html","title":"W10 Brython 繪圖範例","text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"guitarchord\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 ctx.moveTo(100, 100) ctx.lineTo(150, 100) ctx.lineTo(150, 200) ctx.lineTo(100, 200) ctx.lineTo(100, 100) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() from browser import document as doc import math canvas = doc[\"guitarchord2\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 for i in range(5): ctx.moveTo(100+i*10, 100) ctx.lineTo(100+i*10, 200) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() 上述繪圖的程式碼 from browser import document as doc import math canvas = doc[\"guitarchord\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 ctx.moveTo(100, 100) ctx.lineTo(150, 100) ctx.lineTo(150, 200) ctx.lineTo(100, 200) ctx.lineTo(100, 100) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() from browser import document as doc import math canvas = doc[\"guitarchord2\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 for i in range(5): ctx.moveTo(100+i*10, 100) ctx.lineTo(100+i*10, 200) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath()"},{"tags":"Misc","url":"./shang-ke-lian-xi.html","title":"上課練習","text":"找出未分組的名單 data3 = open(\"w6_group.txt\").read() #data3 = open(\"w6_list.txt\").read() #print(data3) group = data3.splitlines() #print(len(group)) # 希望將分組資料轉為學員數列, 令為變數名稱 result_g result_g = [] # 已經註冊者數列設為 registered registered = open(\"w6_list.txt\").read() registered = registered.splitlines() #print(registered) for line in group: # 去除每一行最後的空白成員 sline = line.split(\",\")[:-1] #print (sline) # 再將各組拆成個別組員後, 串成 result_g for m in sline: result_g.append(m) #print(result_g ) #not_in_group = [c for c in registered if c not in result_g] #print(not_in_group) for m in registered: if m not in result_g: print(m)"},{"tags":"Misc","url":"./shang-ke-lian-xi-2.html","title":"上課練習(2)","text":"用for迴圈列出各組名單 content = open(\"cpa.txt\").read() #print(content) # 這是單行註解 result = content.splitlines() # result 變數資料形變為 list #print(result) # 針對 list 資料，可以利用 for 迴圈列出其數列成員 num = 1 for g in result: g_list = g.split(\",\") g_list = g_list[:-1] for m in g_list: print(\"group:\", num, \"member:\", m) num = num + 1 ''' for line in content.splitlines(): result.append(list(line.split(\",\"))) '''"}]};