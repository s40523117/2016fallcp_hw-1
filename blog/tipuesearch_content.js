var tipuesearch = {"pages":[{"url":"./pages/about/","tags":"misc","text":"2016Fall 修課成員網誌","title":"About"},{"url":"./shang-ke-lian-xi.html","tags":"Misc","text":"找出未分組的名單 data3 = open(\"w6_group.txt\").read() #data3 = open(\"w6_list.txt\").read() #print(data3) group = data3.splitlines() #print(len(group)) # 希望將分組資料轉為學員數列, 令為變數名稱 result_g result_g = [] # 已經註冊者數列設為 registered registered = open(\"w6_list.txt\").read() registered = registered.splitlines() #print(registered) for line in group: # 去除每一行最後的空白成員 sline = line.split(\",\")[:-1] #print (sline) # 再將各組拆成個別組員後, 串成 result_g for m in sline: result_g.append(m) #print(result_g ) #not_in_group = [c for c in registered if c not in result_g] #print(not_in_group) for m in registered: if m not in result_g: print(m)","title":"上課練習"},{"url":"./shang-ke-lian-xi-2.html","tags":"Misc","text":"用for迴圈列出各組名單 content = open(\"cpa.txt\").read() #print(content) # 這是單行註解 result = content.splitlines() # result 變數資料形變為 list #print(result) # 針對 list 資料，可以利用 for 迴圈列出其數列成員 num = 1 for g in result: g_list = g.split(\",\") g_list = g_list[:-1] for m in g_list: print(\"group:\", num, \"member:\", m) num = num + 1 ''' for line in content.splitlines(): result.append(list(line.split(\",\"))) '''","title":"上課練習(2)"},{"url":"./2016fall-ji-jie-she-ji-zhu-ti-jiao-xue.html","tags":"Misc","text":"知識管理與最佳化應用實驗室試圖利用計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 進行與機械設計相關的主題式教學, 其中包含強化創造力的教學、令學員熟習六種工程表達方式, 並且俱備融入協同設計所需要的四大面向知識與技能. 機械設計主題教學 創造力三元素, 機械設計的六種表達, 協同設計的四大面向. 強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs)","title":"2016Fall 機械設計主題教學"}]};