import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('https://www.everyapi.com/cars', () => {
        return HttpResponse.json(
            [
                {
                    image: 'https://pictures.dealer.com/l/leithbmwraleighbmw/1982/7213a5eed6e0686eeb392ee640a05c37x.jpg?impolicy=resize&w=768',
                    model: '760i xDrive',
                    price: 141445,
                    characteristics: {
                        year: '2024',
                        body: 'sedan',
                        VIN: 'WBX13EF07S5060074',
                        exteriorColor: 'Alpine White',
                        driveLine: 'AWD',
                        fuelType: 'gasoline',
                    },
                    package: 'Convenience Package'
                },
                {
                    image: 'https://pictures.dealer.com/l/leithbmwraleighbmw/0570/bdd801e2e44675d1a8a19673b258a30ax.jpg?impolicy=downsize_bkpt&imdensity=1&w=520',
                    model: '330i xDrive',
                    price: 51830,
                    characteristics: {
                        year: '2024',
                        body: 'sedan',
                        VIN: 'WBX13EF07S5060074',
                        exteriorColor: 'Arctic Race Blue',
                        driveLine: 'AWD',
                        fuelType: 'gasoline',
                    },
                    package: 'Premium Package'
                },
                {
                    image: 'https://pictures.dealer.com/l/leithbmwraleighbmw/0958/7156daef990c4dbe7901a3a8b498e748x.jpg?impolicy=resize&w=1024',
                    model: 'M2',
                    price: 71995,
                    characteristics: {
                        year: '2024',
                        body: 'coupe',
                        VIN: '3MF13DM08R8E89910',
                        exteriorColor: 'Brooklyn Gray',
                        driveLine: 'RWD',
                        fuelType: 'gasoline',
                    },
                    package: 'Convenience Package'
                },
                {
                    image: 'https://pictures.dealer.com/l/leithbmwraleighbmw/0735/d8d4d5a066258733e3a9d7f911dd3ae7x.jpg?impolicy=resize&w=1024',
                    model: 'M440i xDrive',
                    price: 72135,
                    characteristics: {
                        year: '2025',
                        body: 'coupe',
                        VIN: 'WBA83DA05SCT21921',
                        exteriorColor: 'Portimao Blue',
                        driveLine: 'AWD',
                        fuelType: 'gasoline',
                    },
                    package: 'Premium Package'
                },
                {
                    image: 'https://pictures.dealer.com/l/leithbmwraleighbmw/0332/849975396a8dbe06fe3b559e4cff129cx.jpg?impolicy=resize&w=1024',
                    model: 'M850i xDrive',
                    price: 112015,
                    characteristics: {
                        year: '2025',
                        body: 'gran coupe',
                        VIN: 'WBAGV8C06SCT31299',
                        exteriorColor: 'Alpine White',
                        driveLine: 'AWD',
                        fuelType: 'gasoline',
                    },
                    package: 'Convenience Package'
                },
                {
                    image: 'https://pictures.dealer.com/l/leithbmwraleighbmw/1454/ecb9aabc8517dfa74e86800d373e7ae4x.jpg?impolicy=resize&w=1024',
                    model: 'X3 xDrive30i',
                    price: 58770,
                    characteristics: {
                        year: '2024',
                        body: 'SUV',
                        VIN: 'WBX57DP06RN307982',
                        exteriorColor: 'Mineral White',
                        driveLine: 'AWD',
                        fuelType: 'gasoline',
                    },
                    package: 'Premium Package'
                },
                {
                    image: 'https://pictures.dealer.com/l/leithbmwraleighbmw/0727/69fec3dd0863671d87bb355e22027159x.jpg?impolicy=resize&w=1024',
                    model: 'X5 M60i',
                    price: 97725,
                    characteristics: {
                        year: '2025',
                        body: 'SUV',
                        VIN: '5UX33EU02S9X56342',
                        exteriorColor: 'Sapphire Black',
                        driveLine: 'AWD',
                        fuelType: 'gasoline',
                    },
                    package: 'Convenience Package'
                },
                {
                    image: 'https://pictures.dealer.com/l/leithbmwraleighbmw/0834/49797580e4980bfbf398d778a703374ax.jpg?impolicy=resize&w=1024',
                    model: 'X5 xDrive40i',
                    price: 85275,
                    characteristics: {
                        year: '2025',
                        body: 'sedan',
                        VIN: 'WBX13EF07S5060074',
                        exteriorColor: 'Alpine White',
                        driveLine: 'AWD',
                        fuelType: 'gasoline',
                    },
                    package: 'Premium Package'
                },
                {
                    image: 'https://pictures.dealer.com/l/leithbmwraleighbmw/1448/4d69564d4cc4901368eb37a10c94411bx.jpg?impolicy=resize&w=1024',
                    model: 'X5 M Competition',
                    price: 137675,
                    characteristics: {
                        year: '2025',
                        body: 'SUV',
                        VIN: 'WBX13EF07S5060074',
                        exteriorColor: 'Isle of Man Green',
                        driveLine: 'AWD',
                        fuelType: 'gasoline',
                    },
                    package: 'Convenience Package'
                },
                {
                    image: 'https://pictures.dealer.com/l/leithbmwraleighbmw/1440/193a887671e0b50ff438114c6b6ce09ex.jpg?impolicy=resize&w=1024',
                    model: 'X7 xDrive40i',
                    price: 98845,
                    characteristics: {
                        year: '2024',
                        body: 'sedan',
                        VIN: '5UX23EM08S9X57829',
                        exteriorColor: 'Black Sapphire',
                        driveLine: 'AWD',
                        fuelType: 'gasoline',
                    },
                    package: 'Premium Package'
                },
    ]
    )
    }),
]