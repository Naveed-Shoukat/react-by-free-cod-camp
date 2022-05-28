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
            with various properties and methods are shown. React element that
            discribe what React should eventually add to the actual DOM for us.
          </p>
        </li>
        <li>
          <p>
            We can only return One main dive through JSX components. If we need
            to return more than one components we simply need to wrap them in a
            div or blank element called Fregment i.e.&lt;&gt;&lt;/&gt;{' '}
          </p>
        </li>
        <li>
          <p>
            Declarative programming is a programming paradigm … that expresses
            the logic of a computation without describing its control flow.
            <br />
            Declarative Programming means that we can tell the computer what we
            need to acomplish through this program and it would know how to
            acomplish the given task.
            <br />
            Imperative programming is a programming paradigm that uses
            statements that change a program's state.
            <br />
            Imparative programming as apposed to declarative, we need to provide
            a step by step guide or process to the computer so that it can do
            that specific task for us
            <br />
            For example if I can tell my friend to make a sandwitch for me and
            he know how to make a sandwitch is a way of Declarative Programming.
            Whereas if i will tell my friend to make a sandwitch and I also tell
            him step by step i.e. tell him to first go to kitchen then get the
            bread secondly git some bread-spread/chocklate spread and apply it
            on bread and also apply some other stuffing in it and then finally
            bring it is a way of Imparative programming.
          </p>
        </li>
        <li>
          <p>
            Composable means making small pices of code and then using them to
            make a bigger function/piece of code. For example we can make small
            components/elements and use them to make a complete web-page.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default FunFact;
