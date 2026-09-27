/**
 * CYBER NETWORK CONSTELLATION & THREAT RADAR CANVAS
 * Ahmed Adel Saad Obaid Portfolio
 */

class CyberCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.nodes = [];
    this.packets = [];
    this.mouse = { x: null, y: null, radius: 150 };
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    this.init();
  }

  init() {
    this.resize();
    this.createNodes();
    this.bindEvents();
    
    if (!this.reducedMotion) {
      this.animate();
    } else {
      this.drawStatic();
    }
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  createNodes() {
    this.nodes = [];
    // Adjust density based on screen size
    const count = Math.min(Math.floor((this.width * this.height) / 18000), 75);
    
    for (let i = 0; i < count; i++) {
      this.nodes.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        isDefenseNode: Math.random() > 0.85,
        pulseRadius: 0,
        maxPulse: Math.random() * 30 + 20
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createNodes();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    window.addEventListener('themeChanged', () => {
      // Repaint on theme change
      if (this.reducedMotion) this.drawStatic();
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    
    // Theme-dependent colors
    // Dark: Light Navy with Purple accents (كحلي فاتح مع بنفسجي)
    // Light: Sky Blue with Light Purple accents (ازرق سماوي مع بنفسجي فاتح)
    const nodeColor = isDark ? 'rgba(168, 85, 247, 0.45)' : 'rgba(2, 132, 199, 0.45)';
    const defenseColor = isDark ? 'rgba(192, 132, 252, 0.75)' : 'rgba(139, 92, 246, 0.7)';
    const lineColor = isDark ? 'rgba(168, 85, 247, ' : 'rgba(2, 132, 199, ';

    // Update & Draw Nodes
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];

      // Move
      node.x += node.vx;
      node.y += node.vy;

      // Bounce
      if (node.x < 0 || node.x > this.width) node.vx *= -1;
      if (node.y < 0 || node.y > this.height) node.vy *= -1;

      // Mouse interaction
      if (this.mouse.x !== null) {
        const dx = this.mouse.x - node.x;
        const dy = this.mouse.y - node.y;
        const dist = Math.hypot(dx, dy);
        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          node.x -= (dx / dist) * force * 1.2;
          node.y -= (dy / dist) * force * 1.2;
        }
      }

      // Draw node circle
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = node.isDefenseNode ? defenseColor : nodeColor;
      this.ctx.fill();

      // Radar Pulse for defense nodes
      if (node.isDefenseNode) {
        node.pulseRadius += 0.3;
        if (node.pulseRadius > node.maxPulse) {
          node.pulseRadius = 0;
        }
        const alpha = Math.max(0, 1 - (node.pulseRadius / node.maxPulse));
        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, node.pulseRadius, 0, Math.PI * 2);
        this.ctx.strokeStyle = isDark ? `rgba(192, 132, 252, ${alpha * 0.4})` : `rgba(139, 92, 246, ${alpha * 0.4})`;
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
      }

      // Connect nearby nodes
      for (let j = i + 1; j < this.nodes.length; j++) {
        const other = this.nodes[j];
        const dist = Math.hypot(node.x - other.x, node.y - other.y);
        const maxDist = 135;

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * (isDark ? 0.14 : 0.16);
          this.ctx.beginPath();
          this.ctx.moveTo(node.x, node.y);
          this.ctx.lineTo(other.x, other.y);
          this.ctx.strokeStyle = `${lineColor}${alpha})`;
          this.ctx.lineWidth = 0.75;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }

  drawStatic() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const nodeColor = isDark ? 'rgba(168, 85, 247, 0.35)' : 'rgba(2, 132, 199, 0.35)';
    
    for (const node of this.nodes) {
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = nodeColor;
      this.ctx.fill();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.cyberCanvas = new CyberCanvas('cyber-canvas');
});
