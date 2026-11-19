# 5. Apribojimo principo demonstravimas

```xsd
<xs:complexType name="ProductType">
        <xs:sequence>
            <xs:element name="Title" type="xs:string"/>
            <xs:element name="ReleaseDate" type="xs:date"/>
            <xs:element name="Price" type="st:PriceType"/>
        </xs:sequence>
</xs:complexType>

<xs:complexType name="GameType">
        <xs:complexContent>
            <xs:extension base="st:ProductType">
                <xs:sequence>
                    <xs:element name="PeakConcurrentPlayers" type="xs:nonNegativeInteger"/>
                    <xs:element name="SecondaryGenres" type="st:SecondaryGenresType" minOccurs="0"/>
                    <xs:element name="DLC" type="st:DlcType" minOccurs="0" maxOccurs="unbounded"/>
                </xs:sequence>
                <xs:attribute name="id" type="st:GameIdType" use="required"/>
                <xs:attribute name="platforms" type="st:PlatformListType"/>
            </xs:extension>
        </xs:complexContent>
    </xs:complexType>
```

```xsd
<xs:complexType name="BadGameType">
  <xs:complexContent>
    <xs:restriction base="st:GameType">
      <xs:sequence>
        <xs:element name="Title" type="xs:string"/>
        <xs:element name="ReleaseDate" type="xs:date"/>
        <xs:element name="Price" type="xs:string"/>            
        <xs:element name="PeakConcurrentPlayers" type="xs:nonNegativeInteger"/>
        <xs:element name="SecondaryGenres" type="st:SecondaryGenresType" minOccurs="0"/>
        <xs:element name="DLC" type="st:DlcType" minOccurs="0" maxOccurs="5"/>   
        <xs:element name="Review" type="xs:string"/>
      </xs:sequence>
      <xs:attribute name="platforms" type="st:PlatformListType" use="prohibited"/>
      <xs:attribute name="rating" type="xs:int"/>
    </xs:restriction>
  </xs:complexContent>
</xs:complexType>
```
---
**Klaidos:**
- `Price` tipas yra neišvestas iš `st:PriceType`, jis priimtų reikšmę `abc`, o bazinis tipas jau tos reikšmės nepriimtų
- Naujas elementas `Review` - naujų elementų pridėti negalima (gaunasi praplėtimas), tokio elemento bazinis tipas nepriimtų
- Naujas atributas `rating` - tas pats kaip ir su `Review`

**Kas gerai:**
- `maxOccurs` sumažintas nuo `unbounded` iki `5`

**Kaip pataisyti:**
- naudoti tą patį arba siauresnį tipą
- naujų elementų ar atributų nepridėti, tam naudoti praplėtimą
- pasikartojimai: `minOccurs` galima tik didinti, `maxOccurs` galima tik mažinti
- eiliškumą išlaikyti tokį patį, kaip baziniam tipe

**Teisingas praplėtimas:**
```xsd
<xs:complexType name="GoodGameType">
  <xs:complexContent>
    <xs:restriction base="st:GameType">
      <xs:sequence>
        <xs:element name="Title" type="xs:string"/>
        <xs:element name="ReleaseDate" type="xs:date"/>
        <xs:element name="Price" type="st:PriceType"/> <!-- tas pats arba siauresnis tipas -->
        <xs:element name="PeakConcurrentPlayers" type="xs:nonNegativeInteger"/>
        <xs:element name="SecondaryGenres" type="st:SecondaryGenresType" minOccurs="0"/>
        <xs:element name="DLC" type="st:DlcType" minOccurs="0" maxOccurs="5"/> <!-- siaurinama -->
        <!-- Review pašalintas -->
      </xs:sequence>
      <xs:attribute name="platforms" type="st:PlatformListType" use="prohibited"/?> <!-- galima apriboti pašalinant atributą -->
      <!-- rating pašalintas -->
    </xs:restriction>
  </xs:complexContent>
</xs:complexType>
```




