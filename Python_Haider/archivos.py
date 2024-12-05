import csv

#Abrir el archivo CSV
with open("datoschat.csv", "r") as archivo: 
    lector = csv.reader(archivo)
    for fila in lector:
        print(fila) #imprime cada fila