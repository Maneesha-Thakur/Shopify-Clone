import React from 'react'; 
import './Cards.css';   
const Cards = () => {
  return (
    <div>

<p style={{marginLeft:"30px"}}>EXPLORE THE WORLD'S LARGEST COMMERCE COMMUNITY</p>

<div className="cart">
<div className="cartsOne">
<a href="https://www.shopify.com/commerce-components">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOgfJEbr8zwPDxZPQZRhvXAmUHDKTY0pZ8A&usqp=CAU" alt="tdh" />
<p style={{color:"black",marginLeft:"12px",fontWeight:"bold"}}>Enterprise</p><br />
<p style={{color:"grey",marginTop:"12px",marginLeft:"12px",fontSize:"12px"}}>The modern, composable stack for enterprise retail</p>
</a>
 
</div>
<div className="cartsOne">
 <a href="https://www.shopify.com/plus">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkU1u0uvzoAOzWjAwlfDfRJzqSV9t451oqVjtTdU1SINrqFI7GFbJc0hbgtarDvDy2pk&usqp=CAU" alt="2" />
  <p style={{color:"black",marginLeft:"12px",fontWeight:"bold"}}>Plus</p><br />
  <p style={{color:"grey",marginLeft:"12px",fontSize:"12px"}}>A commerce solution for growing digital brands</p>
 </a>
</div>
<div className="cartsOne">
  <a href="https://www.shopify.com/partners">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxmpYlHUkoLt7jbcEju4SmHVbiHOLlzcCOQ&usqp=CAU" alt="" />
    <p style={{color:"black",marginLeft:"12px",fontWeight:"bold"}} >Partners</p>
    <br />
    <p style={{color:"grey",marginLeft:"12px" ,fontSize:"12px"}}>Offer your expertise to Shopify merchants all over the world</p>
  </a>
  
</div>
<div className="cartsOne">
 <a href="https://shopify.dev/">
<img src="data:image/png;base64,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" alt="" />
<p style={{color:"black",marginLeft:"12px",fontWeight:"bold"}} >Developers</p>
<br />
<p style={{color:"grey",marginLeft:"12px",fontSize:"12px"}}>Build the future of commerce with Shopify's powerful API</p>
 </a>

</div>



<div className="cartsOne">
 <a href="https://www.shopify.com/pos">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA81BMVEX///8gJi////0EEiCytrkfJjO1uboAEh0OFSAdJC46PUYADyALESWsrbH//v/8/Pxoa3IUGSp7fIEYHywvNDsyND4oLjcKEB+vs7QiKTMAAAAAABQbIy4AABEhJzOYm58AAAvt7u8AABmkpqjk5ea/wMTMzc8THCjV1tkACRmSk5eenqMZISkACB309fcNGiPc3d5ISk1cX2YAAB2HiIxzdHc4OEVVVV0ACxQwNDcqLTgwOEFTV1mkqKaCg4pGS1U5QERfY2UbJytKS1iTmJZpcG5sbXdvdn4WGx66uMFoaGkcITNCR0rQztXi6OSGiZSCg4K41R3jAAARsklEQVR4nO1dCXvauNaWbLMYYgtwWBSMjfGKAcehMLRJmu1m2u9LM3P7/3/NPTKLRbZm2gCh4zdPEmvB+PU5OudIliWEMmTIkCFDhgwZMmTIkCFDhgwZMmTIkCFDhgwrqKq6kfMKAtnIef8piLCxU6vRxk79D0AQ8fKbgfcuRCiggTYqi4U3hyiKHWyzO7hrTPsGxTS3CVC5P901Q4LMPsUfjwvFN8fxcaGP5fZgtwSBYtGQP3kbOrl3amBttzJUkfcBN72NaZJXpL1N3b7XQUWtsnwKktwMRYE08EF+I6d+PRRRr6MNOXyVoLpRkDZy7tcjYbg5HObeAUP5VNocTo1Ca6f8BNQSsSEuUYYfkUv1uUR/vazMp9aKktLFQYHSvrRjj1jxKZVxAvhPKcaLFJZpklyiwSeghMqLivKDilCUngNTrbIpO/Y6BKOcTs8OGc4aZw1geXa2SJ7BhRvzY0BdpnJjmXpQ0QBSq4pnOjW4ijItxrujB/f2qy9jJ1qAzHT9nCwTUR03Q3WZcqq0763KvDItOqtU6Mtn0eok5/pwhlYf0775NbS5zsuPIMQiLk7Q0ldYPhbtVaFTvRm5aapJ28EqFYyo6KxSbhn71iplizfVNDWpwr3YGUMV1Y6x+Peim6qiz0084q67f9NJrxQ4jdIrjUe4HwvzO6MKzgiXV5GL4LTxSJkfw4md0U21tlkaz0MQnAL2L5Y6JKBLXTtJi01Rl9OUN6IfrFVgYHVBZ1eyR0NZHCzDBhWdyPostS41HxesnRmbUKSdVGhWx6hyPYGKD2ZwBRdkSFaUyEfcX2kwQWNN/7JkSNBApO1U+E4HF8ONXP0rEBVz/p9p0hZ5RUSG3DTTQuUAH6RCQwUsLj05iCf0sbEsVFnjFj8vnKAgoLshHqaEtwtTNIoL60Hg51z/dp+SsDqUMzTIPkhJAHCOs0lgaoy2lerh1VCbpfYzOMDH5m7MaXSD/Up61aBOB4M06Y1wNdVgFFblEsfwKueH3EebdLRslkDULBqpMoAO+/pptAOGBNnHuBMstAn+2sf0YGkfAWaVnnLx1vcqeLkUM81PvQwip3qV0+ign2tyEvY6uQMuuTUIUUPWxksOKrOk+skyCW0LDM2YE9p0qE25T1e0NUc+1nzOKqn32s1/uMpjzWjswpYqZdpZeTFwaiKzeSuG5EwumhzD6yEILUWtOqxwDEPfOOM4hFXcXGm4gNwehR7G9h1GPQcyW8kQ3RbxKE7V0unjsssxPJFF3uaHVZ0zJmBqdJGzl8GHm1RNBaYew09b7mHAt0l9g7eV6FLWrlaXrCK3gPucoUFnOm88kdkEw5MyjNsydzJVuJL1yxUlgvIjo53frjkFjbnHubVrLMtVXkgmi6a5dI45wFSkShPT9NOsTXOmRgWtZXHrUuXB9Mq5yy0zRO5HXJa4LwUL30kjaxVd6/IYpddIyutKC8F2U00ZorFeTU2NKgRtCiJPGbb6xpbH3AQw9/iKb/v3eq7BCUWty9XUshAU9XD/L46h1zN6qYhVNCnKZ2Sllyq6wWtCi0qafs5GprYHCKT7ysq8ERJ3KDBKL8mBbgbfSp0eLgccQ+hqtNNmqqK8KKdqCZj4RtvhZGyXWai+TWsz0/RGxGlheEzLf/HGsYl7KQMBMbVz0nAAmq3RTvvuKooT05vC6xt+2jAFaKiUOd8tMYTvCT7y3QiVCJe6/In/+rBoyGlaYDGcz4fPjp9ba1hkyNxneofIoaZzTp+g22PcC4QtGRuSjD81+QejcRuDQ+du8ViDW76CwCwL5RlaOJd2n9gZzzV9zCthrSp/WCkBIUJUkNmY1JsSeRYCij8Yx2vPhMDdiwGfgel6p04S5UM+TQ5zIq+V4B9kzKeDPj0w+Qww1m3ewW4SApr6VJ/WOHzCVP7Kpb/qdHjOVzjXjQafrt1gecynZ7ox5E85vaH0jK9QwTfHWxvOcIqYUq2qVRfwfUjLqyTLoTKV/VVS0zRKcZWrMcQUD33uEzqlOa7cH7JTcuXVIaV6dVs94UETY83XfW0JwzCwxkOGO8BhOIQMWdfXa+AhX8dYy/hW/YbhJnCf0DV9e52oin9TqnCYHlLa4DMqZ1iuV/5cJe/+PDPk0nqNG6M05dJf6hSfrdX4RHPrGSXZ39Yz75Pcg7GhQ1xcbyIn+lpfCTpPun+xllEb8uNUgAsfopa1Gn5uzThBFMBqbIXiiVblhiBUNShgP0Qrf66SqMgy0qE1Fc10/yvnTcBY6cydLEcQ1SSKKaZXDznh0PjABQVsvCrtYm8Y1xp3/4GYKbLnJ2nXSQh6lA15pqMU0aksX65NLbrUZAiKuOv9j95orz2hGMuU728IqKL7d1tiaIqGkVo1ot7LWC5wGRDRUCz+zV2MO6LMYaYMAzGHP64FriODHvC6b5XBnKUDzKpgGWzceCtgImresiMiAJDbBt/ABpbgGHJU9DfOgS2dgnIykkCL3MsyiyuT6gnOhzljeJL2cZmLxQa20OIRgQDtkhq07y5PIqDbJm1v6TEUG9+jEJGQBCjQDOzTZVcDrjA60agm5/qf52oJOZVjrBt0FCY9RfaZiQjejxanajKkA9XsDsZD7J8no4ashjICh4oNGsy/RkWumNOut0OQ9QRGOu3b8/6dpMm4aFPDECfzDK/kG8dfD3VarM01Nx4X6PD6akjFr/Owy6lAw70/H9Li9TzDqhXwsPS1CH/msV90UbzRDj+XqT7MJ62ZDPqYPczZEkOC7L5MC6WJJIWXTY12JsjtUFo8rLUk87yoGf4J8sRczsdTRbKvj3U8bFjx/w1pVatARkUrwpXH1qlG/eK1LSnTm2OqFz1yAsFg4XwgKbVPTSp/cNH3giH3T0JJmpREg2nJFgcyJqCXui+Kvm7gI+b6pI4OaiWKoi7nyrOI9fC0JMPXqH58BbIKgIessxoGLuogq7guQtQCGT40Y9FDQnTZh7OyDEy13v8Dn1pHx3rRh6+hNB2r3AoUkRq+rBu61i+5SZfRGY98XZZlrT+cTyi07npARtd1sRey5oeiadvXocqw8HEaJRmTXpN9RK/2/rRANQj6PDzQoIru98YOs9Iof/ZxyGqAHSpvd9qJIuL698t6/WTqsnaS+PJgMivV7++UiFk+plBxeF46K13b1jIScczzq3ppfMtan8oMjDUY39dLszBmflUFnxcpFfjIbBIk5pMZInd6WS+dfG+kD6u2g5Yo15knf5BNHo4zkOhhRlKDy1Qf1kB8RjIex76mIW95Yk1LNOoCUddmtDGz/2BiNnMXZK1KooxcJbJ+V8j8LMJ6hoqEBt46Q7lOHk9gfyJDfZTB5wAZPoMkFXiGkMVyyE4YbtF0C7uRYcbwDZEx3AD+PQzB0gtPY+4S1GdKXw01sau7ZPhCHfKD8ldixwxRdFd6Gndzcu4zxa/GNNopQwH6FNB9lx8Dd5I59kJJG+rfnih/DTCFqPsov1OG7HE1xeLBQ4iYNpP5haQOncPio/JXYlQ2jL60U4YC62Q0lMeguCnNGcp+rfVEhVeiMX8bYbcyzD31NkLOaCZP+UlJFn/llZDF2wi7ZWg8xVAzmsqcof4L/ToBNfaAoZwxfAEZw00iY5gxfB0yhpvEmzBkI3NBPlIXA08ERVKwNnC1/wwJknqdL2jBUI1m7aO1WTl7zxAhqTi8uVrJ8HxI+2tD9/vNkKlovksbHWk+Cg4S9Kl/v9Zl3nOGoKIdjNvSfCBAjS59WjxZf0ywzwzZZ6Wmwd5Sm4/qR+cgwUsL/S4yTFS0bdy0lfloDiGJij580LPPDEFFjzA+kuZPdtToxMcPVRS9X4Ys/yWGyYMXqZnD7LF1oqNzFY0erSj0Dhmy1Xg8dmU/Ypjvy43+UkWZkfFPnph3+A4ZIjToHrEJhC9qKahoF9NURWc+ftwGGd4hQ4KmfjKB8HmGTIJSz2BuYqGis6dVFL1LhghN5y+lPcuQWdFWP0cLKxWdPaOi6L0y9H/AEFS0j2lXSVUUHL318NnxovK7ZDg8fpkhcts53G3NZ3+h6KTIQrVn1mV7nwy1H7RDUtJoZ/U2odR7FKpxeIcMCdjSrv0SQ0EY9zrKag6H122Dij63gM97ZAjBWB69LMNICbg5Kl7rSSs6xztkuEI2ivE6ZAw3iYxhxvB1yBhuEtthiPaD4cGvzF4+3QOGunaR/9kV9/Jszb33zrAuY5+tsPdTKBYwffcMr3wq//wyu7Kc6+x+xtCLDIX84a/hdLzbWV8/luHi7aifx85n7v2AofqrL/KQXc++/BHDN8K/gOEu3kbIfUoOpIMH7yPPcaP/kqN/jF0wPGxJUkuqVY1G6zFuDK32hovt5pWtM1REKjfBJzd1jPFjj940MNWbP+voH6FfKOdwQdkqw9bo7VbPfx30/tuq/Q9AorGGtwqKr7e61wUR0HNjnBuCSra1/M4SW/66HX1lhgwZMmTIkCFDhgwZMmTIkCFDhgwZMmTIkCHDnoAtZLWapK6yRRaTBQTZL0nebubXE9z2k6U3wGr/kmXGgsJqGbAksfuN038eBP0VVr4OAmLOEboIRdLkbuKytS+9ELJsjy3kGs6L4/2TYtju9Nvdo7+73W71AA7+i4KrD+1Otz1zkGB3R91up31pIad7ADW6R97eEXSOfNuJlRryPO+seuu5sdUsXLqB0ihcEWSP7j1PORUryBF9Cap41t4prNeZb7vCLvxsxGaKXBzcR9AarWHPBoZsuXW3TCOncDx/NW/vGFpFv1GTLBSBwfyDMVRLIyV5/XBSHgPDGdt6vo+B4XAShmF+/xgK3kkZWuKUXXjCkDSS/Y4IMsuXTEvjwC0BV6dA29AM73Z9vf8cbKdbdzpss+0N/igzLT0R2bGKpuUKspvyUbesXVqCU/bdOI6d/ZMhSVb5v+h/RQsZIrPfYHled+Qiu3wYTnDfQ8CwOG+Hz76j917hHFUU1z7ssje7/0i2MI5KxdxEqRVBhAJrh8hulyLklPVbe2Cb29047i3gnbLm1U3a4bcjxlC1rrudTqd7AeHO4OgKcsZHd4Jz1OscAcyXT/cuEUi2NN/7wPPYf9YyW3Y+0UnHY/t5RJ4XRd4c29qt6u2wd4bjn+Mpiv8C2hkyvBOwTq6w2N3poR9PN31Our8CSXr/8y139qajH5iDyLNc5DmmKTksjAnCgRWboeOaCvHgv222oA/sKgMzQH9ZkW06hP26yNoPvz+InYltKfkwmiDismjbjq2JHRP0PfIUYGKFKHJt4kVmHEFZLbbimmNNI811drHD+D+H7bq3toW6VjQLwZWDYiquG0oXIZl4imtehNZ16Jls1rbtCEgJQjaUgZAUTEJ3PxgOJA8NrDCoWROVuPkIevSKB7IiQs2rREDNCtXINQnUAoa2Mw2sAOR4F9XQ+X4wDCIBBY6H4nhgt5zBwENeRIR4MIg9wQo8IhBloEDb9ITAgpoWJJNfwUNWsL8xgfDkYYYMO8RgYEfhQBK8YGB+Jm6MPGiGTkAEc2ALyDPzedP07IGEwGc6YHMkKxy09iow/xJFziByFSWOagKahsh0rEkgIfQ1Ajt0F4Fp8UgNKV7NsqZWmHfJRRTtFcPZIPHeNcVBF6jlmdbADM0AvP944AqCNzGRFKtTb+INWIRQmqlkNvD2iuHUcpzQMV3bQTU0lRTTjK1KYDvRneOoxIMARgnQl7gWTYOgFk0sOLCcbW2d/ibIS1KUbwUojiA4g9DUi6W8Y0lSnJfyEQqAnmNB84utCNIkAP+Zl9x9kuFiixkh2YKTvbG+2HUHzf+T5B1tKGGF878Ere3htm9YvFk/ZyAs+JN9Gx99CUANWtlqM0FCHDjav4dNL4CQIJQi9N1iJC0UfYcW6v7K1iXvDiqaKIpqszHRUGqhALqPjhn/TgEqQRdxEI7NmYOcK0SCCap9MU9+JyFC3ymcOARiADWEPyS8VQgJo99Ihoj3BMnq3eg3HB0mL6R+C5AHh78hxQWiaKsLB+wA36ffd30JGwWJQuX291VQxFqf3dqPAcOfxSIE/41Bkk7Frq8iQ4YMGTJkeIj/Aco0QsoHVowdAAAAAElFTkSuQmCC" alt="" />
  <p style={{color:"black",marginLeft:"12px",fontWeight:"bold"}}>Retail stores</p>
 <br />  <p style={{color:"grey",marginLeft:"12px",fontSize:"12px"}}>
  The complete system for selling in person
 </p>
 </a>
</div>
</div> 

 
</div>
  );
}
export default Cards;