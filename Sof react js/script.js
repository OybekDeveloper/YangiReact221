const Book=(props)=>{
    return React.createElement('div',{},[
        React.createElement('h2',{},props.name),
        React.createElement('p',{},props.dic),
        React.createElement('p',{},props.year)
    ])
}


const App=()=>{
    return React.createElement('div',{},[
        React.createElement('h1',{id:'title',classname:'FreeFood'},"Hi my friends"),
        React.createElement(Book,{name:"JS",dic:"Hello programing practice",year:2023}),
        React.createElement(Book,{name:"React",dic:"Hello kampyter practice",year:2023}),
        React.createElement(Book,{name:"Vue",dic:"Hello game practice",year:2023})
    ])
}

ReactDOM.render(React.createElement(App),document.getElementById('root'))