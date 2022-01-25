export interface Ticket {
    titre: string;
    quantite: number;
    description: string;
  }
  
  export const ticketsFromFichier = [
    {
      titre: 'Moi, Moche et Méchant',
      quantite: 1,
      description: 'Une place de cinema gratuite'
    },
    {
      titre: 'Spécialité fruits de mer',
      quantite: 10,
      description: 'Découvrir une nouvelle adresse qui fait le pari de vous faire apprécier le crabe. Ici les recettes sont une belle fusion entre la mer et la France'
    },
    {
      titre: 'McGregor VS Mayweather',
      quantite: 4,
      description: 'Ticket pour assister au plus grand combat du siecle ! MacGregor VS Mayweather !'
    }
  ];