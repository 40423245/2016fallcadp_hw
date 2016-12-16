var tipuesearch = {"pages":[{"tags":"misc","title":"About","text":"2016Fall 修課成員網誌","url":"./pages/about/"},{"tags":"Misc","title":"40423245 2016/12/16 W14","text":"第十四週上課進度 1.學會利用SolveSpace進行機構組立及模擬 (1)SolveSpace的四連桿模擬 由圖片中可以看的出來SolveSpace只能進行線架構的模擬，即使點擊了桿件也無法讓桿件進行作動。 (2)多連桿的機構模擬 先繪製出多連桿的線架構，模擬成功後，再將桿子黏貼上去，最後檢視桿子間是不是會有干涉出現 (3)3D印表機機構模擬 可以從老師倉儲中抓取3D印表機範例，有分為V1跟V2兩個版本，版本間只有連結上的不同，模擬出來的結果應該相似，以下為V2版本的圖例。 可以透過點擊SolveSpace中的截點，一步一步的往上了解3D印表機如何組件而成，並點擊其中一點，來進行3D機構上的模擬。 2.認識利用程式碼將docx轉換成pdf格式 用來學習 Onshape 的教學檔案格式為 docx, 以下使用 Windows 環境下的 Python3 程式, 自動進入各教學檔案目錄, 將 docx 轉為 pdf 首先必須以 pip install comtypes 安裝 comtypes 模組, 然後以 SciTE, 在教學檔案目錄中, 利用以下程式碼建立 docx2pdf.py 後執行, 即可將所有 56 個 docx 轉出 pdf 檔案. import sys import os import comtypes.client wdFormatPDF = 17 #in_file = input(\"input docx\") #out_file = input(\"output filename\") def docx2pdf(in_file, out_file): word = comtypes.client.CreateObject('Word.Application') doc = word.Documents.Open(in_file) doc.SaveAs(out_file, FileFormat=wdFormatPDF) doc.Close() word.Quit() count = 0 # traverse root directory, and list directories as dirs and files as files for root, dirs, files in os.walk(os.getcwd()): #print(root) path = root.split('/') #print(path) #print((len(path) - 1) * '---', os.path.basename(root)) #print(files) for file in files: #print(len(path) * '---', file) file_ext = file.split(\".\")[1] file_name = file.split(\".\")[0] #print(file_ext) if file_ext == \"docx\": count = count + 1 in_file = path[0] + \"/\" + file #print(count,\":\", in_file) out_file = path[0] + \"/\" + file_name + \".pdf\" #print(out_file) docx2pdf(in_file, out_file) #print(count) #docx2pdf(in_file, out_file) print(\"done\") 註解:第三行中的comtypes是針對windows 第五行可以得知格式代碼為17 之後的程式碼分為兩個部分W，一個是如何存檔，另一個是如何讓程式找到檔案，此範例是找docx的檔案，也可換製成尋找零件，只要其換製成關鍵字即可 心得:能夠透過SolveSpace來進行機構上的模擬對於未來在機構的設計上非常有幫助，而且SolveSpace程式輕薄短小方便攜帶，能夠讓我們更方便的進行設計的流程。","url":"./40423245-20161216-w14.html"},{"tags":"Misc","title":"40423245 2016/12/09 W13","text":"第十三週上課進度 1.將SolveSpace的檔案存成html檔,並且把html檔案放進網誌裡面 利用SolveSpace的轉檔功能將檔案存成html檔,並且更改成http設定,以及路徑設定，利用嵌入網頁的指令,把html檔案放進網誌裡面 2.遠端網誌無法更新 在上課期間將上禮拜繪製的組合件在網誌上顯示出來，但當版本上傳後 github pages 無法正確更新, 試著使用 git rm -f -r plugin/liquid_tags/test_data 後提交推送。 在上課期間不能將倉儲推上遠端真的讓我嚇了一跳，還好在後來有順利解決問題。 第十三週影片 2016 Fallcadp W13 from 40423245 on Vimeo .","url":"./40423245-20161209-w13.html"},{"tags":"Misc","title":"40423245 2016/12/02 W12","text":"第十二週上課進度 利用Solvespace練習繪製College_Student_Primer_Creo_2.pdf裡的零件並學習如何組立。 1.使用Solvespace繪製零件一 2.使用Solvespace繪製零件二 3.使用Solvespace將零件一與零件二組立起來 4.在將檔案放置遠端之前要將slvs檔裡的檔案路徑更改以及html檔裡的http後面要加上s。 心得:這禮拜練習Solvespace的繪製，了解到了Solvespace無法計算出過於複雜的相交的面，也了解到Solvespace在機構模擬上應用大於零件繪製上的應用。 影片 2016 Fallcadp W12 from 40423245 on Vimeo .","url":"./40423245-20161202-w12.html"},{"tags":"Misc","title":"40423245 2016/11/25 W11","text":"本週為校慶週，停課一次。","url":"./40423245-20161125-w11.html"},{"tags":"Misc","title":"40423245 2016/11/18 W10","text":"有關 Solvespace 機構模擬功能介紹, 與 Python3 及 Brython 程式驗證 Solvespace 平面四連桿機構模擬 直接利用 Solvespace Analyze-Trace Point-Stop Trace 得到下列繞行路徑: 將所得到的點座標 .csv 以 Excel 畫圖, 得到: Python3 平面四連桿機構模擬: 接下來利用三角函數推導四連桿機構的運動模擬, 即已知長度 18 公分的連桿以逆時針方向旋轉, 希望求三角形頂點的運動座標. 首先利用 Brython, 讀取 data 目錄中的 cadpa_w10_4bar.csv 座標檔案, 然後以 splitlines() 及 split() 取出各點的 x 座標與 y 座標後, 將點連成路徑曲線如下: window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/cadpa_w10_4bar.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 心得：這次的教學考驗了我們的表達能力，在繪出路徑之後要利用Excel以及Brython在網誌上表現出來，雖然曾經有在網誌上繪圖的經驗，但還是很陌生需要好好的練習。 第十週影片 Solvespace 平面四連桿機構模擬 2016 Fallcadp W10 from 40423245 on Vimeo .","url":"./40423245-20161118-w10.html"},{"tags":"Misc","title":"40423245 2016/11/11 W09","text":"第九週上課進度 學員自評 學員在上課時自評，最後評分期限為下禮拜二 心得：到了期中感覺課堂上的理解比上學期多了很多，雖然回家有錄製了一些影片，但並沒有編輯個人網誌及網頁，因此給了自己60 分。","url":"./40423245-20161111-w09.html"},{"tags":"Misc","title":"40423245 2016/11/04 W08","text":"期中課程評量系統","url":"./40423245-20161104-w08.html"},{"tags":"Misc","title":"40423245 2016/10/28 W07","text":"有關 Solvespace 機構模擬功能介紹, 與 機構驗證模擬結果 Solvespace 平面四連桿機構模擬 Python3 平面四連桿機構模擬: 利用三角函數推導四連桿機構的運動模擬, 即已知長度 18 公分的連桿以逆時針方向旋轉, 希望求三角形頂點的運動座標. 直接利用 Solvespace Analyze-Trace Point-Stop Trace 得到下列繞行路徑: 第七周影片 Solvespace的四連桿機構模擬分析 2016 Fallcadpb w7 from 40423245 on Vimeo .","url":"./40423245-20161028-w07.html"},{"tags":"Misc","title":"40423245 2016/10/21 W06","text":"第六週上課進度 學會利用onshape跟Solvespace繪圖 1.可利用學校帳戶創建一個免費的Onshape帳戶 2.可至課程倉儲的上課筆記下載Solvespace 心得：Onshape是可以直接在雲端使用的軟體，不需要下載任何的程式，這點讓我覺得棒；Solvespace雖然用起來很陽春，但是能夠進行機構上的模擬。 第六週影片 Solvespace的使用 2016 Fallcadpb W6-1 from 40423245 on Vimeo . 第六週影片 onshape的應用 2016 Fallcadpb W6-2 from 40423245 on Vimeo .","url":"./40423245-20161021-w06.html"},{"tags":"Misc","title":"40423245 2016/10/14 W05","text":"第五週上課進度 學習如何編輯子模組 1.假如任何人希望 git clone 帶有子模組的倉儲, 則必須在 git clone 後執行 git submodule init, 啟始子模組, 然後利用 git submodule update 取下子模組的對應版本資料 (對應版本紀錄在 .git/modules/g100/refs/heads/master 檔案中 2.假如帶有子模組的倉儲管理者, 希望更新某一子模組的對應版本, 則必須先確定倉儲分支, 然後 cd 到子模組目錄中, 利用 git pull 後, 然後回到上層倉儲進行版本的提交推送. 假如希望拉回所有子模組的對應版本內容, 則使用 git pull origin gh-pages --recurse-submodules, 當然若想拉回 master 分支, 則使用 git pull origin master --recurse-submodules 3.假如希望將所有子模組的對應版本更新到目前最新提交, 使用 git submodule foreach \"(git checkout gh-pages; git pull)&\" 4.當利用上述指令完成更新子模組的對應版本之後, 必須進行提交推送, 將改版資料送到遠端, 之後則透過 git submodule update --init --recursive 將此對應版本的子模組取到近端, 其中因為子模組中還有子模組, 而此更新對這些新加入的子子模組並沒有 --init, 因此下子模組更新時, 要納入 --init 心得：這禮拜要學習如何下載別人的子模組，以及管理自己的分組倉儲，以利之後要與別人協同。 第五週影片 2016 Fallcadpb W5 from 40423245 on Vimeo .","url":"./40423245-20161014-w05.html"},{"tags":"Misc","title":"40423245 2016/10/07 W04","text":"第四週上課進度 創建分組倉儲並將組員加進子模組 1.由組長創建分組倉儲，倉儲名稱為2016fallcp_ag10 2.複製倉儲的基本架構至倉儲中 3.接著由組長將組員納為子模組 子模組指令git submodule add -b gh-pages https://github.com/scrum-1/2016fallcp_ag100 g100 心得：這禮拜學習的是新的指令，老師說從第六個禮拜開始將會有分組作業，組員間的工作分配很重要。 第四週影片 2016 Fallcadpb W4 from 40423245 on Vimeo .","url":"./40423245-20161007-w04.html"},{"tags":"Misc","title":"40423245 2016/09/30 W03","text":"第三週上課進度 如何使自己的課程倉儲及個人網頁能展示出基礎架構 讓自己的個人倉儲有基礎架構 1.先git clone自己的倉儲 2.至班級倉儲git clone班級倉儲 3.將課程倉儲的基礎架構複製到個人倉儲 4.將個人倉儲推送至遠端 讓自己的個人網頁有基礎架構 1.至scrum-3的倉儲裡的index複製程式碼 2.將程式碼複製到個人網頁的index 心得：這禮拜的作業跟上學期所教的內容差不多，因此在進度上還沒有落後太多。 第三週影片 2016 Fallcadpb W3 from 40423245 on Vimeo .","url":"./40423245-20160930-w03.html"},{"tags":"Misc","title":"40423245 2016/09/23 W02","text":"第二週上課進度 須學會如何利用ShareX錄製影片 1.先至ShareX 官網 下載軟體 2.至軟體的Task settings中的Screen recorder裡的Screen recording設定錄影對象及錄音方式 3.製軟體的Application settings中的path設定存檔內容 4.按下Shift+Prt Scrn即可選擇錄影框框 5.再按下Shift+Prt Scrn即可停止錄影 心得：ShareX是個不錯的軟體，它可以選擇要錄影的部分，重要的是它有開放原始碼，能夠讓我們知道他是如何寫的。 第二週影片 2016 Fallcadpb W2 from 40423245 on Vimeo .","url":"./40423245-20160923-w02.html"},{"tags":"Misc","title":"40423245 2016/09/16 W01","text":"第一週上課進度 1.登入 github, fork(https://github.com/mdecourse/2016fallcadp) 2.在自己的帳號下建立 2016fallcadp_hw 倉儲, 將 default branch 設為 gh-pages 3.在自己的帳號下建立 帳號.github.io 倉儲, 並在其下建立 index.html 即可用 https://帳號.github.io 連結 index.html 4.自選組員, 先確定各組組長學號, 將會設為[課程倉儲] (https://github.com/mdecourse/2016fallcadp) 倉儲的協同者, 專門負責協助管理此倉儲, 並處理組員對此倉儲的 pull requests 心得：第一週上課老師大概講解了一下這學期要做的事，這學期我們會有比較多分組上的作業，因此組員間的配合相當重要，第一週也因為中秋連假而調課。 第一週影片 2016 Fallcadpb W1 from 40423245 on Vimeo .","url":"./40423245-20160916-w01.html"}]};