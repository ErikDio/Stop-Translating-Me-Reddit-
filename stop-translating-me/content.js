console.log("Verificando...");
if (location.href.includes("tl=")) {
  const url = new URL(location.href);
  if (url.searchParams.get("tl") !== "original") {
    url.searchParams.set("tl", "original");
    console.log("Alterado com sucesso!");
    location.href = url.toString();
  } 
} else {
    console.log("Tudo certo");
}
