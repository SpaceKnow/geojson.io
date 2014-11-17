/*
 * Spaceknow front-end
 * Copyright (C) 2014 SpaceKnow, Inc.
 */
module.exports = init;

function init(context) {
    L.control.scale().addTo(context.map);
}
