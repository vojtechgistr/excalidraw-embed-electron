$currentDir = Get-Location

serve -s "$currentDir\excalidraw-embed\build\" -l 9834 && npm start