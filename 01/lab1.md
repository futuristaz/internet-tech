```xpath
/Steam/Genre/Game[@id="gm_0004"]

<Game id="gm_0004">
    <Title>The Witcher 3: Wild Hunt</Title>
    <ReleaseDate>2015-05-19</ReleaseDate>
    <Price>49.99</Price>
    <PeakConcurrentPlayers>103329</PeakConcurrentPlayers>
    <SecondaryGenres>
        <GenreRef ref="g_action"/>
    </SecondaryGenres>
</Game>
```
# 1. Ašys 
## Ancestor
```xpath
/Steam/Genre/Game[@id="gm_0004"]/ancestor::Genre

<Genre id="g_rpg">
    <Game id="gm_0003">
        <Title>Assassin's Creed Valhalla</Title>
        <ReleaseDate>2020-11-10</ReleaseDate>
        <Price>59.99</Price>
        <PeakConcurrentPlayers>19181</PeakConcurrentPlayers>
        <SecondaryGenres>
            <GenreRef ref="g_action"/>
            <GenreRef ref="g_adventure"/>
        </SecondaryGenres>
        <st:DLC id="dlc_0003_01">
            <Title>Dawn of Ragnarok</Title>
            <Price>9.99</Price>
            <ReleaseDate>2022-03-10</ReleaseDate>
        </st:DLC>
    </Game>

    <Game id="gm_0004">
        <Title>The Witcher 3: Wild Hunt</Title>
        <ReleaseDate>2015-05-19</ReleaseDate>
        <Price>49.99</Price>
        <PeakConcurrentPlayers>103329</PeakConcurrentPlayers>
        <SecondaryGenres>
            <GenreRef ref="g_action"/>
        </SecondaryGenres>
    </Game>

    <Game id="gm_0005">
        <Title>Assassin's Creed Odyssey</Title>
        <ReleaseDate>2018-10-05</ReleaseDate>
        <Price>59.99</Price>
        <PeakConcurrentPlayers>62069</PeakConcurrentPlayers>
        <SecondaryGenres>
            <GenreRef ref="g_action"/>
            <GenreRef ref="g_adventure"/>
        </SecondaryGenres>
        <st:DLC id="dlc_0005_01">
            <Title>Legacy of the First Blade</Title>
            <Price>24.99</Price>
            <ReleaseDate>2018-12-04</ReleaseDate>
        </st:DLC>
    </Game>
</Genre>
```

## Descendant
```xpath
/Steam/Genre/Game[@id="gm_0004"]/descendant::GenreRef

<GenreRef ref="g_action"/>
```

## Following-sibling
```xpath
/Steam/Genre/Game[@id="gm_0004"]/following-sibling::Game

<Game id="gm_0005">
    <Title>Assassin's Creed Odyssey</Title>
    <ReleaseDate>2018-10-05</ReleaseDate>
    <Price>59.99</Price>
    <PeakConcurrentPlayers>62069</PeakConcurrentPlayers>
    <SecondaryGenres>
        <GenreRef ref="g_action"/>
        <GenreRef ref="g_adventure"/>
    </SecondaryGenres>
    <st:DLC id="dlc_0005_01">
        <Title>Legacy of the First Blade</Title>
        <Price>24.99</Price>
        <ReleaseDate>2018-12-04</ReleaseDate>
    </st:DLC>
</Game>
```

## Preceding-sibling
```xpath
/Steam/Genre/Game[@id="gm_0004"]/preceding-sibling::Game

<Game id="gm_0003">
    <Title>Assassin's Creed Valhalla</Title>
    <ReleaseDate>2020-11-10</ReleaseDate>
    <Price>59.99</Price>
    <PeakConcurrentPlayers>19181</PeakConcurrentPlayers>
    <SecondaryGenres>
        <GenreRef ref="g_action"/>
        <GenreRef ref="g_adventure"/>
    </SecondaryGenres>
    <st:DLC id="dlc_0003_01">
        <Title>Dawn of Ragnarok</Title>
        <Price>9.99</Price>
        <ReleaseDate>2022-03-10</ReleaseDate>
    </st:DLC>
</Game>
```

## Following
```xpath
/Steam/Genre/Game[@id="gm_0004"]/following::Genre

<Genre id="g_simulation">
    <Game id="gm_0006">
        <Title>Euro Truck Simulator 2</Title>
        <ReleaseDate>2012-10-19</ReleaseDate>
        <Price>19.99</Price>
        <PeakConcurrentPlayers>73887</PeakConcurrentPlayers>
        <st:DLC id="dlc_0006_01">
            <Title>Nordic Horizons</Title>
            <Price>17.99</Price>
            <ReleaseDate>2021-05-06</ReleaseDate>
        </st:DLC>
    </Game>

    <Game id="gm_0007">
        <Title>American Truck Simulator</Title>
        <ReleaseDate>2016-02-03</ReleaseDate>
        <Price>19.99</Price>
        <PeakConcurrentPlayers>19153</PeakConcurrentPlayers>
        <st:DLC id="dlc_0007_01">
            <Title>Illinois</Title>
            <Price>11.99</Price>
            <ReleaseDate>2019-06-04</ReleaseDate>
        </st:DLC>
    </Game>

    <Game id="gm_0008">
        <Title>Cities: Skylines</Title>
        <ReleaseDate>2015-03-10</ReleaseDate>
        <Price>27.99</Price>
        <PeakConcurrentPlayers>60386</PeakConcurrentPlayers>
        <st:DLC id="dlc_0008_01">
            <Title>Race Day</Title>
            <Price>12.99</Price>
            <ReleaseDate>2023-06-27</ReleaseDate>
        </st:DLC>
    </Game>
</Genre>

<Genre id="g_adventure">
    <Game id="gm_0009">
        <Title>Red Dead Redemption 2</Title>
        <ReleaseDate>2019-12-05</ReleaseDate>
        <Price>59.99</Price>
        <PeakConcurrentPlayers>99993</PeakConcurrentPlayers>
        <SecondaryGenres>
            <GenreRef ref="g_action"/>
            <GenreRef ref="g_rpg"/>
        </SecondaryGenres>
    </Game>
    
    <Game id="gm_0010">
        <Title>Shadow of the Tomb Raider</Title>
        <ReleaseDate>2018-09-14</ReleaseDate>
        <Price>39.99</Price>
        <PeakConcurrentPlayers>38368</PeakConcurrentPlayers>
        <SecondaryGenres>
            <GenreRef ref="g_action"/>
        </SecondaryGenres>
    </Game>
</Genre>
```

## Preceding
```xpath
/Steam/Genre/Game[@id="gm_0004"]/preceding::Genre

<Genre id="g_action">
    <Game id="gm_0001">
        <Title>Grand Theft Auto V</Title>
        <ReleaseDate>2015-04-14</ReleaseDate>
        <Price>29.99</Price>
        <PeakConcurrentPlayers>364548</PeakConcurrentPlayers>
        <SecondaryGenres>
            <GenreRef ref="g_adventure"/>
        </SecondaryGenres>
    </Game>
    <Game id="gm_0002">
        <Title>Far Cry 5</Title>
        <ReleaseDate>2018-03-27</ReleaseDate>
        <Price>59.99</Price>
        <PeakConcurrentPlayers>92445</PeakConcurrentPlayers>
        <SecondaryGenres>
            <GenreRef ref="g_adventure"/>
        </SecondaryGenres>
        <st:DLC id="dlc_0002_01">
            <Title>Hours of Darkness</Title>
            <Price>11.99</Price>
            <ReleaseDate>2018-06-05</ReleaseDate>
        </st:DLC>
    </Game>
</Genre>
```

## Attribute
```xpath
/Steam/Genre/Game[@id="gm_0004"]/attribute::id
/Steam/Genre/Game[@id="gm_0004"]/@id

gm_0004
```
# 2. Kelias su predikatu, kuriame yra XPath kelias
Rasti visus `Game` elementus, kurių antrinio žanro `GenreRef/@ref` reikšmė sutampa su pirmojo `Genre` elemento `@id` reikšme.

```xpath
/Steam/Genre/Game[
    descendant::GenreRef/@ref = /Steam/Genre[1]/@id
]

Rezultatas: gm_0003, gm_0004, gm_0005, gm_0009, gm_0010
```
# 3. Tekstiniai vaikai, sumavimas
## Tekstiniai vaikai
```xpath
count(//*[text()[normalize-space()]])

58
```
## Reikšmių sumavimas

```xpath
Kaina tik žaidimų:
sum(//Game/Price)
427.90

Kaina tik DLC:
sum(//DLC/Price)
89.94

Kaina visko:
sum(//Price)
517.84
```
## sum(//*)
```xpath
<a><b>2</b><c>3</c></a>
```
`//*` grąžina `a`, `b`, `c`, kiekvieną jų paverčia į string: `a` -> `"23"`, `b` -> `"2"`, `c` -> `"3"`, paverčia į skaičius ir susumuoja, todėl `sum(//*) = 23 + 2+ 3 = 28`

# 4. Operacijos su operandais (be aibių)
- `+` tik su skaičiais, viską verčia į number
  - `5 + "3" = 8`
  - `5 + "kuku" = NaN`
  - `true() + 1 = 2`
- `>, <, >=, <=` irgi verčia į number
- `=`, `!=` pagal pirmenybę:
  - jei bent vienas boolean: abu verčiami į boolean
  - jei bent vienas number: abu verčiami į number
  - kitaip abu į string

# 5. Trijų žingsnių išraiška

```xpath
/descendant::Genre[@id="g_rpg"]/Game[Price > 50]/following-sibling::Game

/descendant::Genre[@id="g_rpg"]

<Genre id="g_rpg">
    <Game id="gm_0003">
        <Title>Assassin's Creed Valhalla</Title>
        <ReleaseDate>2020-11-10</ReleaseDate>
        <Price>59.99</Price>
        <PeakConcurrentPlayers>19181</PeakConcurrentPlayers>
        <SecondaryGenres>
            <GenreRef ref="g_action"/>
            <GenreRef ref="g_adventure"/>
        </SecondaryGenres>
        <st:DLC id="dlc_0003_01">
            <Title>Dawn of Ragnarok</Title>
            <Price>9.99</Price>
            <ReleaseDate>2022-03-10</ReleaseDate>
        </st:DLC>
    </Game>

    <Game id="gm_0004">
        <Title>The Witcher 3: Wild Hunt</Title>
        <ReleaseDate>2015-05-19</ReleaseDate>
        <Price>49.99</Price>
        <PeakConcurrentPlayers>103329</PeakConcurrentPlayers>
        <SecondaryGenres>
            <GenreRef ref="g_action"/>
        </SecondaryGenres>
    </Game>

    <Game id="gm_0005">
        <Title>Assassin's Creed Odyssey</Title>
        <ReleaseDate>2018-10-05</ReleaseDate>
        <Price>59.99</Price>
        <PeakConcurrentPlayers>62069</PeakConcurrentPlayers>
        <SecondaryGenres>
            <GenreRef ref="g_action"/>
            <GenreRef ref="g_adventure"/>
        </SecondaryGenres>
        <st:DLC id="dlc_0005_01">
            <Title>Legacy of the First Blade</Title>
            <Price>24.99</Price>
            <ReleaseDate>2018-12-04</ReleaseDate>
        </st:DLC>
    </Game>
</Genre>

/descendant::Genre[@id="g_rpg"]/Game[Price > 50]

<Game id="gm_0003">
    <Title>Assassin's Creed Valhalla</Title>
    <ReleaseDate>2020-11-10</ReleaseDate>
    <Price>59.99</Price>
    <PeakConcurrentPlayers>19181</PeakConcurrentPlayers>
    <SecondaryGenres>
        <GenreRef ref="g_action"/>
        <GenreRef ref="g_adventure"/>
    </SecondaryGenres>
    <st:DLC id="dlc_0003_01">
        <Title>Dawn of Ragnarok</Title>
        <Price>9.99</Price>
        <ReleaseDate>2022-03-10</ReleaseDate>
    </st:DLC>
</Game>

<Game id="gm_0005">
    <Title>Assassin's Creed Odyssey</Title>
    <ReleaseDate>2018-10-05</ReleaseDate>
    <Price>59.99</Price>
    <PeakConcurrentPlayers>62069</PeakConcurrentPlayers>
    <SecondaryGenres>
        <GenreRef ref="g_action"/>
        <GenreRef ref="g_adventure"/>
    </SecondaryGenres>
    <st:DLC id="dlc_0005_01">
        <Title>Legacy of the First Blade</Title>
        <Price>24.99</Price>
        <ReleaseDate>2018-12-04</ReleaseDate>
    </st:DLC>
</Game>

/descendant::Genre[@id="g_rpg"]/Game[Price > 50]/following-sibling::Game

<Game id="gm_0004">
    <Title>The Witcher 3: Wild Hunt</Title>
    <ReleaseDate>2015-05-19</ReleaseDate>
    <Price>49.99</Price>
    <PeakConcurrentPlayers>103329</PeakConcurrentPlayers>
    <SecondaryGenres>
        <GenreRef ref="g_action"/>
    </SecondaryGenres>
</Game>

<Game id="gm_0005">
    <Title>Assassin's Creed Odyssey</Title>
    <ReleaseDate>2018-10-05</ReleaseDate>
    <Price>59.99</Price>
    <PeakConcurrentPlayers>62069</PeakConcurrentPlayers>
    <SecondaryGenres>
        <GenreRef ref="g_action"/>
        <GenreRef ref="g_adventure"/>
    </SecondaryGenres>
    <st:DLC id="dlc_0005_01">
        <Title>Legacy of the First Blade</Title>
        <Price>24.99</Price>
        <ReleaseDate>2018-12-04</ReleaseDate>
    </st:DLC>
</Game>
```

# 6. Išraiškos su aibėmis
Egzstuoja mazgas ar pora, su kuriuo palyginimas teisingas
- aibė ir skaičius: kiekvieno mazgo string-value -> number

Ar yra žaidimas, kurio kaina yra 19.99?
```xpath
//Game/Price = 19.99
true
```
- aibė ir eilutė: kiekvieno mazgo string-value
Ar yra žaidimas, kurio pavadinimas yra "Far Cry 5"?
```xpath
//Game/Title = "Far Cry 5"
true
```
- aibė ir boolean: visa aibė -> boolean (jei netuščia, tai true)
- dvi aibės: imama kiekviena pora ir lyginamos jų string-value

# 7. >, < su aibėmis
Ar egzistuoja pora? Viskas paverčiama į skaičių `Number(string(value))`.

Jei tekstas ne skaičius -> `NaN`. Bet koks palyginimas su `NaN` yra `false`.

Ar yra DLC, kuris kainuoja daugiau nei žaidimas?
```xpath
//DLC/Price > //Game/Price

true
```

# 8. XPath naudojimas

puslapių scrapinimas, dev toolsai
  





