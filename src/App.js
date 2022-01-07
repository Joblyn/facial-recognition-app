import './App.css'
import Navigation from './components/Navigation/navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-tsparticles'

function App () {
  const particlesInit = main => {
    console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  const particlesLoaded = container => {
    console.log(container)
  }

  const particleOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }
  return (
    <div className='App'>
      <Particles
        className='particles'
        id='tsparticles'
        url='http://foo.bar/particles.json'
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  )
}

export default App
