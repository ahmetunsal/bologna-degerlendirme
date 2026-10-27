@echo off
chcp 65001 > nul
echo ======================================================================
echo  Selcuk Universitesi Saglik Yonetimi - Mobil Bologna Degerlendirme
echo ======================================================================
echo.
echo Bilgisayardan giris: http://localhost:3000
echo Telefondan (ayni Wi-Fi) giris: http://192.168.1.178:3000
echo.
set "PATH=C:\Program Files\Microsoft Visual Studio\2022\Community\MSBuild\Microsoft\VisualStudio\NodeJs;%PATH%"
pnpm start -H 0.0.0.0 -p 3000
pause
