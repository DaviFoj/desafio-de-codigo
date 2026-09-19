requisicoe = [120, 350, 180, 500, 90, 220, 200]
rapida = 0
lenta = 0
tempmedio = 0

for i in requisicoe:
    if i <= 200:
        rapida += 1
    elif i > 200:
        lenta += 1

print(f"Requisições rápidas: {rapida}")
print(f"Requisições lentas: {lenta}")

def MeidaTempo(arr):
    total = 0
    index = 0
    for i in arr:
        total += i
        index += 1
    tempmedio = total/index
    return tempmedio

tempmedio = MeidaTempo(requisicoe)

print(f"Tempo médio: {tempmedio:.2f}ms")