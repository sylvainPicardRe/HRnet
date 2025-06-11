import { Link } from 'react-router'

import DataTable from '../../components/DataTable'

const data = [
  {
    firstName: 'Jean',
    lastName: 'Dupont',
    startDate: '2022-01-15',
    department: 'Informatique',
    birth: '1985-06-20',
    street: '123 Rue Principale',
    city: 'Saint-Denis',
    state: 'Réunion',
    zipcode: '97400',
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
    zipcode: '97430',
  },
  {
    firstName: 'Albert',
    lastName: 'Einstein',
    startDate: '2020-05-20',
    department: 'Physique',
    birth: '1879-03-14',
    street: '789 Boulevard Relativité',
    city: 'Saint-Pierre',
    state: 'Réunion',
    zipcode: '97410',
  },
  {
    firstName: 'Isaac',
    lastName: 'Newton',
    startDate: '2019-03-10',
    department: 'Mathématiques',
    birth: '1643-01-04',
    street: '101 Rue de la Gravité',
    city: 'Saint-Paul',
    state: 'Réunion',
    zipcode: '97460',
  },
  {
    firstName: 'Ada',
    lastName: 'Lovelace',
    startDate: '2018-07-22',
    department: 'Informatique',
    birth: '1815-12-10',
    street: '202 Avenue des Algorithmes',
    city: 'Saint-Leu',
    state: 'Réunion',
    zipcode: '97436',
  },
  {
    firstName: 'Nikola',
    lastName: 'Tesla',
    startDate: '2017-11-30',
    department: 'Électricité',
    birth: '1856-07-10',
    street: "303 Boulevard de l'Innovation",
    city: 'Saint-Benoît',
    state: 'Réunion',
    zipcode: '97470',
  },
  {
    firstName: 'Rosalind',
    lastName: 'Franklin',
    startDate: '2016-05-18',
    department: 'Biologie',
    birth: '1920-07-25',
    street: "404 Rue de l'ADN",
    city: 'Saint-André',
    state: 'Réunion',
    zipcode: '97440',
  },
  {
    firstName: 'Charles',
    lastName: 'Darwin',
    startDate: '2015-09-12',
    department: 'Biologie',
    birth: '1809-02-12',
    street: "505 Avenue de l'Évolution",
    city: 'Saint-Louis',
    state: 'Réunion',
    zipcode: '97450',
  },
  {
    firstName: 'Galileo',
    lastName: 'Galilei',
    startDate: '2014-04-05',
    department: 'Astronomie',
    birth: '1564-02-15',
    street: '606 Rue des Étoiles',
    city: 'Saint-Joseph',
    state: 'Réunion',
    zipcode: '97480',
  },
  {
    firstName: 'Leonardo',
    lastName: 'da Vinci',
    startDate: '2013-12-01',
    department: 'Arts',
    birth: '1452-04-15',
    street: '707 Boulevard de la Renaissance',
    city: 'Saint-Philippe',
    state: 'Réunion',
    zipcode: '97442',
  },
  {
    firstName: 'Hypatia',
    lastName: "d'Alexandrie",
    startDate: '2012-06-25',
    department: 'Philosophie',
    birth: '0350-01-01',
    street: '808 Rue des Savoirs',
    city: 'Cilaos',
    state: 'Réunion',
    zipcode: '97413',
  },
]

const EmployeeList = () => {
  return (
    <main className="container">
      <Link to="/">Home</Link>
      <DataTable data={data} />
    </main>
  )
}

export default EmployeeList
