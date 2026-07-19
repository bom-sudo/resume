import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const row1Icons = [
  { name: "Kubernetes", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Python", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "SAP", src: "https://cdn.worldvectorlogo.com/logos/sap-3.svg" },
  { name: "OpenAI", src: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
  { name: "Docker", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
  { name: "Oracle", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" },
  { name: "Go", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" },
  { name: "Copilot", src: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" },
  { name: "AWS", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "PostgreSQL", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" },
  { name: "JavaScript", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "TensorFlow", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg" },
  { name: "Terraform", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg" },
  { name: "MongoDB", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
];

const row2Icons = [
  { name: "Ansible", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ansible/ansible-original.svg" },
  { name: "Bash", src: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" },
  { name: "ElasticSearch", src: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg" },
  { name: "PyTorch", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg" },
  { name: "Linux", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
  { name: "React", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
  { name: "Redis", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" },
  { name: "HuggingFace", src: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { name: "Nginx", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" },
  { name: "Next.js", src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
  { name: "Grafana", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg" },
  { name: "Git", src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
  { name: "Prometheus", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg" },
];

export const MarqueeSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const row1X = useTransform(scrollYProgress, [0, 1], [-400, 400]);
  const row2X = useTransform(scrollYProgress, [0, 1], [400, -400]);

  // Repeat for seamless loop
  const row1 = [...row1Icons, ...row1Icons, ...row1Icons, ...row1Icons];
  const row2 = [...row2Icons, ...row2Icons, ...row2Icons, ...row2Icons];

  return (
    <section ref={containerRef} className="bg-bg-primary pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-6">
      {/* Row 1 - Tech Stack */}
      <motion.div 
        className="flex gap-6 w-max"
        style={{ x: row1X, willChange: 'transform' }}
      >
        {row1.map((icon, i) => (
          <div key={`tech-${i}`} className="flex flex-col items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-bg-inverse/[0.05] border border-border-primary shadow-xl shrink-0">
            <img src={icon.src} alt={icon.name} className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-3" />
            <span className="text-text-muted/80 text-xs sm:text-sm font-medium tracking-wider uppercase">{icon.name}</span>
          </div>
        ))}
      </motion.div>

      {/* Row 2 - AI Tools */}
      <motion.div 
        className="flex gap-6 w-max"
        style={{ x: row2X, willChange: 'transform' }}
      >
        {row2.map((icon, i) => (
          <div key={`ai-${i}`} className="flex flex-col items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-bg-inverse/[0.05] border border-border-primary shadow-xl shrink-0">
            <img src={icon.src} alt={icon.name} className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-3" />
            <span className="text-text-muted/80 text-xs sm:text-sm font-medium tracking-wider uppercase">{icon.name}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
