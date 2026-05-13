interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'GloVe with TensorFlow Estimators',
    description: 'Training GloVe word embeddings with TensorFlow Estimators API.',
    href: 'https://github.com/yxtay/glove-tensorflow',
  },
  {
    title: 'Recommendation Models in TensorFlow',
    description:
      'Implementation of DeepFM and Factorization Machines in TensorFlow Estimators API.',
    href: 'https://github.com/yxtay/recommender-tensorflow',
  },
  {
    title: 'Character RNN Text Generation',
    description: 'Character RNN Text Generation with different deep learning frameworks.',
    href: 'https://github.com/yxtay/char-rnn-text-generation',
  },
  {
    title: 'Word Prediction',
    description: 'Word Prediction using ngrams.',
    href: 'https://yxtay.shinyapps.io/dsc-shiny',
  },
  {
    title: 'CLT Demo',
    description: 'Illustration of Central Limit Theorem.',
    href: 'https://yxtay.shinyapps.io/rv-clt',
  },
]

export default projectsData
