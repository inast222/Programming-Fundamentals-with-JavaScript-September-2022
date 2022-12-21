function matchName(input) {
    let pattern = /\b[A-Z][a-z]+\ [A-Z][a-z]+\b/g;

    let names = input.match(pattern);

    
        console.log(names.join(" "))
    
 
}
matchName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan   Ivanov")