// FLASH.SVG.02.JS

function createSvg() { // ??? TO MODIFY. NOT WORKING.
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var svgNS = svg.namespaceURI;
// document.body.appendChild(svg);
}

function svgPath(id, path, style) {
    var el = document.createElementNS(svgNS,"path");
    el.setAttribute("id", id);
    el.setAttribute("d", path);
    el.setAttribute("style", style);
    svg.appendChild(el);
    document.body.appendChild(svg);
}

function svgRect(id, x, y, width, height, style) {
    var el = document.createElementNS(svgNS,"rect");
    el.setAttribute("id", id);
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    el.setAttribute("width", width);
    el.setAttribute("height", height);
    el.setAttribute("style", style);
    svg.appendChild(el);
    document.body.appendChild(svg);
}

function svgCircle(id, cx, cy, r, style) {
    var el = document.createElementNS(svgNS,"circle");
    el.setAttribute("id", id);
    el.setAttribute("cx", cx);
    el.setAttribute("cy", cy);
    el.setAttribute("r", r);
    el.setAttribute("style", style);
    svg.appendChild(el);
    document.body.appendChild(svg);
}

function svgEllipse(id, cx, cy, rx, ry, style) {
    var el = document.createElementNS(svgNS,"ellipse");
    el.setAttribute("id", id);
    el.setAttribute("cx", cx);
    el.setAttribute("cy", cy);
    el.setAttribute("rx", rx);
    el.setAttribute("ry", ry);
    el.setAttribute("style", style);
    svg.appendChild(el);
    document.body.appendChild(svg);
}

function svgLine(id, x1, y1, x2, y2, style) {
    var el = document.createElementNS(svgNS,"line");
    el.setAttribute("id", id);
    el.setAttribute("x1", x1);
    el.setAttribute("y1", y1);
    el.setAttribute("x2", x2);
    el.setAttribute("y2", y2);
    el.setAttribute("style", style);
    svg.appendChild(el);
    document.body.appendChild(svg);
}

function svgPolygon(id, points, style) {
    var el = document.createElementNS(svgNS,"polygon");
    el.setAttribute("id", id);
    el.setAttribute("points", points);
    el.setAttribute("style", style);
    svg.appendChild(el);
    document.body.appendChild(svg);
}

function svgPolyline(id, points, style) {
    var el = document.createElementNS(svgNS,"polyline");
    el.setAttribute("id", id);
    el.setAttribute("points", points);
    el.setAttribute("style", style);
    svg.appendChild(el);
    document.body.appendChild(svg);
}

function svgTriangle(id, x1, y1, x2, y2, x3, y3, style) {
    var el = document.createElementNS(svgNS, "polygon");
    el.setAttribute("id", id);
    var points=""+x1+","+y1+" "+x2+","+y2+" "+x3+","+y3+"";
    el.setAttribute("points", points);
    el.setAttribute("style", style);
    svg.appendChild(el);
    document.body.appendChild(svg);
}

function svgFoursides(id, x1, y1, x2, y2, x3, y3, x4, y4, style) {
    var el = document.createElementNS(svgNS, "polygon");
    el.setAttribute("id", id);
    var points=""+x1+","+y1+" "+x2+","+y2+" "+x3+","+y3+" "+x4+","+y4+"";
    el.setAttribute("points", points);
    el.setAttribute("style", style);
    svg.appendChild(el);
    document.body.appendChild(svg);
}

function svgText(id, x, y, text, style) {
    var el = document.createElementNS(svgNS,"text");
    el.setAttribute("id", id);
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    var textNode = document.createTextNode(text);
    el.appendChild(textNode);
    el.setAttribute("style", style);
    svg.appendChild(el);
    document.body.appendChild(svg);
}

function svgG(id, style) {
    var el = document.createElementNS(svgNS, "g");
    el.setAttribute("id", id);
    el.setAttribute("style", style);
    svg.appendChild(el);
    document.body.appendChild(svg);
}

function gRect(id, pid, x, y, width, height, style) {
    var el = document.createElementNS(svgNS,"rect");
    var g = document.getElementById(pid);
    el.setAttribute("id", id);
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    el.setAttribute("width", width);
    el.setAttribute("height", height);
    el.setAttribute("style", style);
    g.appendChild(el);
    svg.appendChild(g);
}

function gPath(id, pid, path, style) {
    var el = document.createElementNS(svgNS,"path");
    var g = document.getElementById(pid);
    el.setAttribute("id", id);
    el.setAttribute("d", path);
    el.setAttribute("style", style);
    g.appendChild(el);
    svg.appendChild(g);
}

function gCircle(id, pid, cx, cy, r, style) {
    var el = document.createElementNS(svgNS,"circle");
    var g = document.getElementById(pid);
    el.setAttribute("id", id);
    el.setAttribute("cx", cx);
    el.setAttribute("cy", cy);
    el.setAttribute("r", r);
    el.setAttribute("style", style);
    g.appendChild(el);
    svg.appendChild(g);
}

function gEllipse(id, pid, cx, cy, rx, ry, style) {
    var el = document.createElementNS(svgNS,"ellipse");
    var g = document.getElementById(pid);
    el.setAttribute("id", id);
    el.setAttribute("cx", cx);
    el.setAttribute("cy", cy);
    el.setAttribute("rx", rx);
    el.setAttribute("ry", ry);
    el.setAttribute("style", style);
    g.appendChild(el);
    svg.appendChild(g);
}

function gLine(id, pid, x1, y1, x2, y2, style) {
    var el = document.createElementNS(svgNS,"line");
    var g = document.getElementById(pid);
    el.setAttribute("id", id);
    el.setAttribute("x1", x1);
    el.setAttribute("y1", y1);
    el.setAttribute("x2", x2);
    el.setAttribute("y2", y2);
    el.setAttribute("style", style);
    g.appendChild(el);
    svg.appendChild(g);
}

function gPolygon(id, pid, points, style) {
    var el = document.createElementNS(svgNS,"polygon");
    var g = document.getElementById(pid);
    el.setAttribute("id", id);
    el.setAttribute("points", points);
    el.setAttribute("style", style);
    g.appendChild(el);
    svg.appendChild(g);
}

function gPolyline(id, pid, points, style) {
    var el = document.createElementNS(svgNS,"polyline");
    var g = document.getElementById(pid);
    el.setAttribute("id", id);
    el.setAttribute("points", points);
    el.setAttribute("style", style);
    g.appendChild(el);
    svg.appendChild(g);
}

function gTriangle(id, pid, x1, y1, x2, y2, x3, y3, style) {
    var el = document.createElementNS(svgNS, "polygon");
    var g = document.getElementById(pid);
    el.setAttribute("id", id);
    var points=""+x1+","+y1+" "+x2+","+y2+" "+x3+","+y3+"";
    el.setAttribute("points", points);
    el.setAttribute("style", style);
    g.appendChild(el);
    svg.appendChild(g);
}

function gFoursides(id, pid, x1, y1, x2, y2, x3, y3, x4, y4, style) {
    var el = document.createElementNS(svgNS, "polygon");
    var g = document.getElementById(pid);
    el.setAttribute("id", id);
    var points=""+x1+","+y1+" "+x2+","+y2+" "+x3+","+y3+" "+x4+","+y4+"";
    el.setAttribute("points", points);
    el.setAttribute("style", style);
    g.appendChild(el);
    svg.appendChild(g);
}

function gText(id, pid, x, y, text, style) {
    var el = document.createElementNS(svgNS,"text");
    var g = document.getElementById(pid);
    el.setAttribute("id", id);
    el.setAttribute("x", x);
    el.setAttribute("y", y);
    var textNode = document.createTextNode(text);
    el.appendChild(textNode);
    el.setAttribute("style", style);
    g.appendChild(el);
    svg.appendChild(g);
}

