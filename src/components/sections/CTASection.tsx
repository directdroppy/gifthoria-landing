'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden"
      id="cta"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hemen Başlayın
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Gifthoria ile sevdiklerinize özel hediyeler göndermek artık çok kolay.
              Hemen ücretsiz hesap oluşturun ve ayrıcalıklardan yararlanın.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://app.gifthoria.com"
                className="btn bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-3 font-semibold flex items-center group"
              >
                Ücretsiz Hesap Oluştur
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="btn btn-outline text-white hover:bg-white hover:text-primary rounded-full px-8 py-3 font-semibold border-2"
              >
                Bizimle İletişime Geçin
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;