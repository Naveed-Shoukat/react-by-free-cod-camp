function FunFact() {
  return (
    <div>
      <img src="./logo192.png" alt="Logo" width="40px" />
      <h1>Fun Fact about React</h1>
      <ul>
        <li>Rect was first release in 2013</li>
        <li>React was originaly created by jorden Walke from facebook</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>React was maintained by facebook</li>
        <li>React Power's thousand of enterprises apps and mobile apps</li>
      </ul>
      <ol>
        <li>
          <h4>Why we need to import React and ReactDOM</h4>
          <p>
            JSX Syntext defines in React. Technicaly we don't need to import
            @version 18 and above. However the purpose behined this is the JSX
            syntex was handled by React and thefore we need to import React and
            ReactDOM. If we do not import React then our JSX will look like an
            object in the actual DOM
          </p>
        </li>
        <li>
          <p>
            If we console.log(JSX component/code) it will shown as a object in
            with various properties and methods.
          </p>
        </li>
        <li>
          <p>
            We can only return One main dive through JSX components. If we need
            to return more than one components we simply need to wrap them in a
            div or blank element i.e.&lt;&gt;&lt;/&gt;{' '}
          </p>
        </li>
        <li>
          <p>Declarative</p>
          <p>imparative</p>
        </li>
      </ol>
    </div>
  );
}

export default FunFact;
