import random
import math
users = ["a", "b", "c", "d", "e"]
weight = [0.20, 0.20, 0.20, 0.20, 0.20]
montos = [random.randint(0, 25) for i in range(len(users))]

def calculate():
	print(montos)
	media = sum(montos)/len(montos)
	saldos = [montos[i] - media for i in range(len(users))]
	print(saldos)
	print(media)

	print()

	roundmedia = round(media, 0)
	saldos_round = [montos[i] - roundmedia for i in range(len(users))]
	print(saldos_round)
	print(roundmedia)
	sobrante = 0
	for element in saldos_round:
		sobrante += element

	print(sobrante)

	print(round((media - roundmedia)*len(users)))

	if sobrante == 0:
		return

	if sobrante < 0:
		for i in range(len(saldos_round)):
			if saldos_round[i] < 0:
				saldos_round[i] += sobrante
				break

	else:
		for i in range(len(saldos_round)):
			if saldos_round[i] > 0:
				saldos_round[i] -= sobrante
				break
	print(saldos_round)


def w_calculate():
	total = sum(montos)
	print(total)
	a_pagar = [weight[i] * total for i in range(len(users))]
	print(montos)
	print(a_pagar)
	debe = [round(montos[i] - a_pagar[i]) for i in range(len(users))]
	print(debe)
	print(sum(debe))
	debe[0] -= sum(debe)
	print(debe)

	print(sum(debe))

#calculate()
w_calculate()