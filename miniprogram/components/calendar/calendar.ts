// Doc: https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html

import CSS from '../../libs/css/index';

Component({
    properties: {
    },

    data: {
        Style: {
            Button: CSS.Unmarshal({ width: '100%' })
        },
        show: false
    },

    methods: {

        _onDisplay() {
            this.setData({ show: true });
        },

        _onClose() {
            this.setData({ show: false });
        },

        _onConfirm(event: unknown) {
            this.setData({ show: false });
            this.triggerEvent('input', event)
        }
    }
})
