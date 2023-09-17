const router = require('express').Router();
// Middleware để đảm bảo không có xung đột tuyến đường
const preventRouteCollision = (req, res, next) => {
  // Kiểm tra tuyến đường hiện tại có trùng với tuyến đường khác hay không
  const currentRoute = req.baseUrl;
  const otherRoutes = router.stack.filter(
    (layer) => layer.route && layer.route.path !== currentRoute,
  );

  const duplicateRoute = otherRoutes.find(
    (layer) => layer.route.path === currentRoute,
  );

  if (duplicateRoute) {
    return res.status(500).json({ error: 'Duplicate route' });
  }

  next();
};

module.exports = preventRouteCollision;