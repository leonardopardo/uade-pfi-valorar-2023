import illustration1 from 'assets/img/icons/spot-illustrations/source.png';
import illustration2 from 'assets/img/icons/spot-illustrations/sentiment.png';
import illustration3 from 'assets/img/icons/spot-illustrations/charts.png';

export default [
  {
    icon: ['far', 'circle'],
    iconText: 'Fuente',
    color: 'info',
    title: 'Inteligenica Artificial',
    description:
      'Utilizamos Inteligencia Artificial para analizar mas de 20000 publicaciones todas las semanas.',
    image: illustration1
  },
  {
    icon: ['far', 'circle'],
    iconText: 'Análisis',
    color: 'info',
    title: 'Una Mirada al Futuro',
    description:
      'Análisis de sentimiento y predicción de tendencias a partir de los principales medios de comunicación.',
    image: illustration2,
    inverse: true
  },
  {
    icon: ['far', 'circle'],
    iconText: 'Reportes',
    color: 'info',
    title: 'Información al Instante',
    description:
      'Reportes personalizados con la información que necesitas para tomar decisiones de negocio.',
    image: illustration3
  }
];
