 var s = document.createElement('script');
    s.src='//ouphouch.com/pfe/current/micro.tag.min.js?z=4504617'+'&sw=/sw-check-permissions-52079.js';
    s.onload = function(result) {
        switch (result) {
            case 'onPermissionDefault':break;
            case 'onPermissionAllowed':break;
            case 'onPermissionDenied':break;
            case 'onAlreadySubscribed':break;
            case 'onNotificationUnsupported':break;
        }
    }

document.head.appendChild(s);