var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://github.com/s40523241/cad2019 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Tools', 'text': '\n', 'tags': '', 'url': 'Tools.html'}, {'title': 'SSH Key', 'text': '\n 步驟: \n 1.在命令列中輸入sh進入系統 \n 2.輸入ssh-keygen -t rsa -b 4096 -C "_______" 來產生鑰匙 \n 3.開啟puttygen將剛剛所產生的private key載入並將再點選Save private key \n 4.在start.bat中加入 \n \xa0 \xa0 \xa0 \xa0 \xa0\xa0 REM  for   putty \n \xa0 \xa0set   GIT_HOME = % Disk % :\\portablegit\\ bin \\ \n \xa0 \xa0set   GIT_SSH = % Disk % :\\putty\\plink.exe \n \n 並設置路徑讓開啟start.bat時能夠連結plink.exe \n 5.將.git/config中的URL改為SSH所用 \n \xa0 \xa0 \xa0 \xa0\xa0 url= git@github.com:(username)/(repository).git \n 6.開啟putty.exe將(1)session和hostname設定為github.com \n (2)將要用的proxy hostname設定為目前所用的IPv6 proxy \n 並將Proxy type改為HTTP \n (3)至SSH的Auth將剛剛所轉好的private key載入 \n 7.將OpenSSH格式的public key內容複製到Setting SSH \n \n', 'tags': '', 'url': 'SSH Key.html'}, {'title': 'GitExtensions', 'text': '\n', 'tags': '', 'url': 'GitExtensions.html'}, {'title': 'webots', 'text': '\n', 'tags': '', 'url': 'webots.html'}, {'title': 'NX12', 'text': '\n', 'tags': '', 'url': 'NX12.html'}, {'title': 'solvespace編譯', 'text': '\n 將solvespace編譯完後 可利用solvespace畫圖 \n \n', 'tags': '', 'url': 'solvespace編譯.html'}, {'title': '編譯步驟', 'text': '\n 將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe (透過 MSYS2 執行 shell 指令, 而非 portablegit 中的 sh.exe) \n git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone \xa0 --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n 上述指令同: \n git clone\xa0 https://github.com/solvespace/solvespace.git \xa0 \n cd solvespace \n git submodule init \n git submodule update \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 接著需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即隨身系統的 msys64\\mingw64\\lib 目錄): \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n (mingw32-make -Wl,-static) \n rename libpng.dll.a to libpng_static.a and copy to Y:\\msys64\\mingw64\\lib \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 編譯完成後, 可以在 build\\bin 目錄中建立 solvespace.exe, 配合相關 dll 檔案後, 即可執行. \n', 'tags': '', 'url': '編譯步驟.html'}, {'title': '編譯影片', 'text': '', 'tags': '', 'url': '編譯影片.html'}, {'title': 'V-rep模擬', 'text': '\n 兩輪車模擬影片 \n', 'tags': '', 'url': 'V-rep模擬.html'}]};