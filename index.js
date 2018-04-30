import React from 'react'
import ReactDOM from 'react-dom'
import delay from 'delay'
import { Spring, Trail, Keyframes, animated, config } from 'react-spring'

class App extends React.Component {
  state = {
    items: ['Lorem ipsum', 'dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor']
  }

  async componentDidMount() {
    // Since the script prop basically just receives the animation function we can
    // pick it up and use it elsewhere, that makes it possible to combine several of them
    // even though they belong to different elements, they can wait for one another, etc.
    // And again, since we are using the native prop none of this causes re-rendering
    while (true) {
      this.container(Spring, { from: { x: -100 }, to: { x: 0 }, config: config.slow })
      await delay(100)
      await this.content(Trail, { from: { x: -120, opacity: 0 }, to: { x: 0, opacity: 1 } })
      this.content(Trail, { to: { x: -120, opacity: 0 } })
      await delay(500)
      await this.container(Spring, { to: { x: -100 }, config: config.slow })
    }
  }

  render() {
    return (
      <Keyframes native script={next => (this.container = next)}>
        {({ x }) => (
          <animated.div className="container" style={{ transform: x.interpolate(x => `translate3d(${x}%,0,0)`) }}>
            <Keyframes native keys={this.state.items} script={next => (this.content = next)}>
              {this.state.items.map(item => ({ x, ...props }) => (
                <animated.div
                  className="item"
                  style={{ transform: x.interpolate(x => `translate3d(${x}%,0,0)`), ...props }}>
                  {item}
                </animated.div>
              ))}
            </Keyframes>
          </animated.div>
        )}
      </Keyframes>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))