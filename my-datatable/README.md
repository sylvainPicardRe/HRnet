# my-datatable-sydyjo

A React table to manage and display employees.

---

## Prérequis

- **Node.js** version recommandée : `>=16.0.0`
- **npm** pour gérer les dépendances
- Un éditeur de texte comme [Visual Studio Code](https://code.visualstudio.com/) est recommandé pour un confort optimal.

---

## Installation

Installez le package via npm :

```bash
npm install my-datatable-sydyjo
```

Ce package nécessite que votre projet utilise React 18 ou une version supérieure.

Merci d’installer manuellement ces dépendances si ce n’est pas déjà fait :

```bash
npm install react@18 react-dom@18
```

## Exemple d'utilisation

```jsx
import MyDataTable from 'my-datatable-sydyjo'
import 'my-datatable-sydyjo/dist/my-datatable-sydyjo.css'

const employees = [
  {
    firstName: 'Jean',
    lastName: 'Dupont',
    startDate: '2022-01-15',
    department: 'Informatique',
    dateOfBirth: '1985-06-20',
    street: '123 Rue Principale',
    city: 'Saint-Denis',
    state: 'Réunion',
    zipCode: '97400',
  },
  {
    firstName: 'Marie',
    lastName: 'Curie',
    startDate: '2021-09-01',
    department: 'Recherche',
    birth: '1978-11-07',
    street: '456 Avenue des Sciences',
    city: 'Le Tampon',
    state: 'Réunion',
    zipCode: '97430',
  },
]

function App() {
  return (
    <div>
      <h1>Liste des employés</h1>
      <MyDataTable data={employees} />
    </div>
  )
}

export default App
```

## Page npm du package

```bash
https://www.npmjs.com/package/my-datatable-sydyjo
```
