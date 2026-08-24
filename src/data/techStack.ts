export type TechCategoryKey = "infra" | "enterprise" | "dev" | "ai";

export interface TechIcon {
  name: string;
  src: string;
  href: string;
}

const devicon = (path: string) =>
  `https://raw.githubusercontent.com/devicons/devicon/master/icons/${path}`;

export const techStack: Record<TechCategoryKey, TechIcon[]> = {
  infra: [
    { name: "Kubernetes", src: devicon("kubernetes/kubernetes-plain.svg"), href: "https://kubernetes.io/" },
    { name: "Docker", src: devicon("docker/docker-original-wordmark.svg"), href: "https://www.docker.com/" },
    { name: "AWS", src: devicon("amazonwebservices/amazonwebservices-original-wordmark.svg"), href: "https://aws.amazon.com" },
    { name: "Terraform", src: devicon("terraform/terraform-original.svg"), href: "https://www.terraform.io/" },
    { name: "Ansible", src: devicon("ansible/ansible-original.svg"), href: "https://www.ansible.com/" },
    { name: "Linux", src: devicon("linux/linux-original.svg"), href: "https://www.linux.org/" },
    { name: "Nginx", src: devicon("nginx/nginx-original.svg"), href: "https://www.nginx.com" },
    { name: "Grafana", src: devicon("grafana/grafana-original.svg"), href: "https://grafana.com" },
    { name: "Prometheus", src: devicon("prometheus/prometheus-original.svg"), href: "https://prometheus.io" },
  ],
  enterprise: [
    { name: "SAP", src: "https://cdn.worldvectorlogo.com/logos/sap-3.svg", href: "https://www.sap.com" },
    { name: "Oracle", src: devicon("oracle/oracle-original.svg"), href: "https://www.oracle.com/" },
    { name: "PostgreSQL", src: devicon("postgresql/postgresql-original-wordmark.svg"), href: "https://www.postgresql.org" },
    { name: "MongoDB", src: devicon("mongodb/mongodb-original-wordmark.svg"), href: "https://www.mongodb.com/" },
    { name: "Redis", src: devicon("redis/redis-original-wordmark.svg"), href: "https://redis.io" },
    { name: "Elasticsearch", src: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg", href: "https://www.elastic.co" },
  ],
  dev: [
    { name: "Python", src: devicon("python/python-original.svg"), href: "https://www.python.org" },
    { name: "Go", src: devicon("go/go-original.svg"), href: "https://golang.org" },
    { name: "JavaScript", src: devicon("javascript/javascript-original.svg"), href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Bash", src: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg", href: "https://www.gnu.org/software/bash/" },
    { name: "React", src: devicon("react/react-original-wordmark.svg"), href: "https://reactjs.org/" },
    { name: "Next.js", src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg", href: "https://nextjs.org/" },
    { name: "Git", src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", href: "https://git-scm.com/" },
  ],
  ai: [
    { name: "OpenAI", src: "https://cdn.worldvectorlogo.com/logos/openai-2.svg", href: "https://openai.com" },
    { name: "GitHub Copilot", src: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg", href: "https://github.com/features/copilot" },
    { name: "TensorFlow", src: devicon("tensorflow/tensorflow-original.svg"), href: "https://www.tensorflow.org" },
    { name: "PyTorch", src: devicon("pytorch/pytorch-original.svg"), href: "https://pytorch.org/" },
    { name: "Hugging Face", src: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", href: "https://huggingface.co/" },
  ],
};
