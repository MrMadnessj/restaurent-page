export default function home()
{
    const container = document.createElement('div');
    const btn = document.createElement('button');
    
    btn.innerHTML = 'Order Online';
    container.append(btn);

    return container;
}