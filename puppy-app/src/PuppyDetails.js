import React from "react";
import { useParams } from "react-router-dom";

function PuppyDetails() {
    const {id} = useParams();

    const puppyData = {
        1: {
        name: 'French Bulldog',
        breed: 'French Bulldog Breed',
        description: 'French Bulldogs are known for their affectionate nature and adorable bat-like ears.',
        care: 'French Bulldogs require special care due to their brachycephalic (short-nosed) nature. It\'s important to provide them with regular exercise, a balanced diet, and routine veterinary check-ups. Dental care, grooming, and temperature management are also crucial. Training and socialization should start early, and attention should be given to their breathing difficulties.',      
        movingPicture: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGsxMXhreHFjemp1eWc4MXdoMHlqbWdyemF2OHF2ZmZoMHE0dW0xciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dEPGknRiEniec/giphy.gif',
    },
        2: {
            name: 'Boston Terrier',
            breed: 'Boston Terrier Breed',
            description: 'Boston Terriers are small and friendly dogs with a lively and outgoing personality.',
            care: 'Caring for Boston Terriers involves specific considerations to promote their well-being. Regular exercise, such as walks and playtime, helps keep them physically active and mentally stimulated. Providing them with a balanced diet tailored to their nutritional needs ensures their overall health. Grooming their short coat and cleaning their facial folds are important to maintain cleanliness and prevent skin issues.',
            movingPicture: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXRxcnY2em9nNWoyMTYxaWF4dnRiOGY0aHR2NGV1bTBoMjE2ODhjMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PiuapHv98aApBzsQqd/giphy.gif',   
     },
       3: {
        name: 'Peckingese',
        breed: 'Peckingese Breed',
        description: 'The Pekingese is a small, royal companion dog with a distinctive appearance and a courageous spirit.',
        care: 'Pekingese dogs require dedicated care to keep them healthy and content. Regular grooming is essential to maintain their beautiful coat and prevent matting. Due to their short noses, they can be sensitive to extreme temperatures, so it\'s important to provide them with a comfortable environment. Moderate exercise, appropriate for their small size, helps keep them active and fit. Regular veterinary check-ups, a balanced diet, and early socialization contribute to their overall well-being and make them wonderful companions.',
        movingPicture: 'https://media.tenor.com/sWKr-xo2at8AAAAM/crocodile-retreat.gif',
    },
       4: {
        name: 'Pug',
        breed: 'Pug Breed',
        description: 'The Pug is a charming and playful small breed known for its wrinkled face and endearing personality.',
        care: 'Pugs are delightful and affectionate dogs that require attentive care to ensure their well-being. Due to their brachycephalic (short-nosed) structure, they can be more susceptible to respiratory issues and overheating. It\'s important to provide them with a cool and comfortable environment, especially during hot weather. Regular exercise, such as short walks, helps keep them active without overexertion. Their smooth, short coats are relatively low-maintenance, but regular brushing helps manage shedding. Proper nutrition, regular vet check-ups, and positive reinforcement training contribute to their overall health and happiness. With their charming personalities, pugs make wonderful companions for individuals and families alike.',
        movingPicture: 'https://media.tenor.com/XteRCC7v4iQAAAAM/black-dog-funny.gif',
    },
       5: {
        name: 'English Bulldog',
        breed: 'English Bulldog',
        description: 'The English Bulldog is a robust and affectionate breed with a distinctive appearance and gentle temperament.',
        care: 'English Bulldogs require attentive care due to their brachycephalic (short-nosed) nature. Creating a cool environment, regular exercise, and proper grooming are essential. Monitoring their weight, scheduling routine vet check-ups, and employing positive reinforcement training contribute to their well-being. With their gentle and affectionate nature, English Bulldogs make excellent companions. Their loyalty, friendly disposition, and love for human companionship make them cherished family members and delightful pets to have by your side.',
        movingPicture: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTVycmd2MzdoeHp0d2NmYzJzam90NTVpcnVvMG1sNWl1ejlxMW44diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2XflxzqJ29VI6NjDxK0/giphy.gif',
       },
    };

    const puppy = puppyData[id];

    return (
        <div>
            <h2>Puppy Details</h2>
            <h3>{puppy.name}</h3>
            <p>Breed: {puppy.breed}</p>
            <p>{puppy.description}</p>
            <p>{puppy.care}</p>
            <img src={puppy.movingPicture} alt={puppy.name} />
        </div>
    )
}

export default PuppyDetails;