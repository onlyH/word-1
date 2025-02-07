export default class Yard {
    load() {
        document.querySelector('#yardGroupPanel').style.visibility = 'visible';
        var self = this;
        var yards = {};
        fetch('https://kk2j6nl1s0.execute-api.us-west-2.amazonaws.com/prd/trailers/samsara/query/facility-list').then(
            response => response.json()
        ).then(data => {
            data.data.forEach(item => {
                yards[item.name.trim()] = item;
            });
            global.earth.load(data.data);
            this.data = yards;
            var keys = Object.keys(yards);
            var html = '';
            for(var i=0;i<keys.length;i++) {
                html += `<tr>
                <td>
                    <a style="color: inherit; text-decoration: none;" class="selectLink" href="#">
                    ${keys[i]}
                    </a>
                </td>
                </tr>`;
            }
            document.querySelector('#yardList').innerHTML = html;
            document.querySelectorAll('#yardList tr td .selectLink').forEach(o => {
                o.onclick = function() {
                    self.select(this);
                };
            });
            document.querySelector('#yardGroupPanel .skeleton-container').remove();
        });
        
    }

    select(e) {
        document.querySelector("#title h3").innerHTML = e.innerText;
        global.earth.selectYard(this.data[e.innerText]);
    }
}